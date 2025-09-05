import mongoose from "mongoose";
import { generateOptions } from "../../../helpers/mongooseHelper.js";
import Status from "../../../models/configuration/master/status.schema.js";

export const getStatus = async (req, res) => {
  try {
    const query = {
      admin: req.admin._id,
      deletedAt: null,
    };
    const options = generateOptions(req);

    const statusType = await Status.aggregate([
      {
        $match: {
          admin: new mongoose.Types.ObjectId(req.admin._id),
          deletedAt: null,
        },
      },
      {
        $group: {
          _id: "$type",
        },
      },
    ]);

    const response = await Status.paginate(query, options);
    return res.status(200).json({
      status: "success",
      message: "Statuses fetched successfully",
      data: response,
      type: statusType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = req.admin._id;
    const query = { _id: id, admin, deletedAt: null };

    const getStatus = await Status.findOne(query);
    if (!getStatus) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    return res.status(200).json({
      ststus: "success",
      message: "Statuses fetched successfully",
      data: getStatus,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getStatusByType = async (req, res) => {
  try {
    const { type } = req.params;
    const admin = req.admin._id;

    const statusType = await Status.find({ type, admin, deletedAt: null });

    if (!statusType || statusType.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No status found for this type",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Status fetched successfully by type",
      data: statusType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createStatus = async (req, res) => {
  try {
    const { name, color, type } = req.body;
    const admin = req.admin._id;

    const response = new Status({ name, color, type, admin });
    await response.save();
    return res.status(201).json({
      status: "success",
      message: "Status created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedStatus = await Status.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedStatus) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Status updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = req.admin._id;
    const query = { _id: id, admin: admin, deletedAt: null };
    const deletedStatus = await Status.deleteOne(query);

    if (!deletedStatus) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Status deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const trashStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = req.admin._id;
    const query = { _id: id, admin: admin, deletedAt: null };
    const deletedStatus = await Status.findOne(query);

    if (!deletedStatus) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    await Status.findByIdAndUpdate(
      { _id: id },
      { deletedAt: new Date() },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Status trash successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDelete = async (req, res) => {
  try {
    const admin = req.admin._id;
    const ids = req.body;
    const query = {
      admin: admin,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllStatus = await Status.find(query);

    if (!AllStatus.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    await Status.deleteMany(query);

    return res.status(200).json({
      status: "success",
      message: "All status deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiTrash = async (req, res) => {
  try {
    const admin = req.admin._id;
    const ids = req.body;
    const query = {
      admin: admin,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllStatus = await Status.find(query);

    if (!AllStatus.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    await Status.updateMany(query, {
      $set: { deletedAt: new Date(), updatedAt: new Date() },
    });

    return res.status(200).json({
      status: "success",
      message: "All status trashed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const restoreTrash = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = req.admin._id;
    const query = { _id: id, admin: admin };
    const status = await Status.findOne(query);
    if (!status) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    await Status.updateOne(query, { $set: { deletedAt: null } });
    return res.status(200).json({
      status: "success",
      message: "Status restore successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multipleRestoreTrash = async (req, res) => {
  try {
    const ids = req.body;
    const admin = req.admin._id;
    const query = { admin: admin, deletedAt: { $ne: null }, _id: { $in: ids } };
    const status = await Status.find(query);
    if (!status) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    await Status.updateMany(query, { $set: { deletedAt: null } });
    return res.status(200).json({
      status: "success",
      message: "All status restore successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
