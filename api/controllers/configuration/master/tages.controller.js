import mongoose from "mongoose";
import { generateOptions } from "../../../helpers/mongooseHelper.js";
import Tages from "../../../models/configuration/master/tages.schema.js";
import { adminsLogsHelper } from "../../../helpers/adminsLogsHelper.js";
export const getTages = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
    };
    const options = generateOptions(req);

    const TagesType = await Tages.aggregate([
      {
        $match: {
          admin: new mongoose.Types.ObjectId(_id),
          website: new mongoose.Types.ObjectId(website),
          deletedAt: null,
        },
      },
      {
        $group: {
          _id: "$type",
        },
      },
    ]);

    const response = await Tages.paginate(query, options);
    return res.status(200).json({
      status: "success",
      message: "Tages fetched successfully",
      data: response,
      type: TagesType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getTagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };

    const getTages = await Tages.findOne(query);
    if (!getTages) {
      return res.status(404).json({
        status: "error",
        message: "Tages not found",
      });
    }

    return res.status(200).json({
      ststus: "success",
      message: "Tages fetched successfully",
      data: getTages,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getTagesByType = async (req, res) => {
  try {
    const { type } = req.params;
    const { _id, website } = req.admin;
    const tagesType = await Status.find({
      type,
      admin: _id,
      website,
      deletedAt: null,
    });

    if (!tagesType || tagesType.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No tages found for this type",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Tages fetched successfully by type",
      data: tagesType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createTages = async (req, res) => {
  try {
    const { name, type } = req.body;
    const { _id, website } = req.admin;

    const response = new Tages({ name, type, admin: _id, website });
    await response.save();
    await adminsLogsHelper(req, "Tages created successfully");
    return res.status(201).json({
      status: "success",
      message: "Tages created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateTages = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedTages = await Tages.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedTages) {
      return res.status(404).json({
        status: "error",
        message: "Tages not found",
      });
    }
    await adminsLogsHelper(req, "Tages updated successfully");
    return res.status(200).json({
      status: "success",
      message: "Tages updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteTages = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const deletedTages = await Tages.deleteOne(query);

    if (!deletedTages) {
      return res.status(404).json({
        status: "error",
        message: "Tages not found",
      });
    }
    await adminsLogsHelper(req, "Tages deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Tages deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteTages = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllTages = await Tages.find(query);

    if (!AllTages.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Tages not found",
      });
    }
    await Tages.deleteMany(query);
    await adminsLogsHelper(req, "All tages deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "All Tages deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
