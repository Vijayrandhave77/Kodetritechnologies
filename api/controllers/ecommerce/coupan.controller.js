import { generateOptions } from "../../helpers/mongooseHelper.js";
import { slugGenerator } from "../../helpers/slugGenerator.js";
import Coupan from "../../models/ecommerce/coupan.schema.js";

export const getCoupan = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: null };
    const options = generateOptions(req);
    const coupan = await Coupan.paginate(query, options);

    return res.status(200).json({
      status: "success",
      message: "fetch Coupan successfully",
      data: coupan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getTrashCoupan = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: { $ne: null } };
    const options = generateOptions(req);
    const Coupans = await Coupan.paginate(query, options);

    return res.status(200).json({
      status: "success",
      message: "fetch Trash Coupans successfully",
      data: Coupans,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCoupanById = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const query = { _id: id, admin: _id, website, deletedAt: null };

    const Coupans = await Coupan.findOne(query);

    return res.status(200).json({
      status: "success",
      message: "fetch Coupans successfully",
      data: Coupans,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createCoupan = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const data = req.body;
    const slug = await slugGenerator(data.name, Coupan);

    const payload = {
      ...data,
      slug,
      admin: _id,
      website,
    };

    const coupan = await Coupan.create(payload);
    return res.status(201).json({
      status: "success",
      message: "Coupan create successfully",
      data: coupan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateCoupan = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const payload = req.body;
    const query = {
      _id: id,
      admin: _id,
      website,
    };

    const response = await Coupan.findOneAndUpdate(query, payload);
    if (response) {
      return res.status(200).json({
        status: "success",
        message: "update successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteCoupan = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const deleteCoupan = await Coupan.deleteOne(query);

    if (!deleteCoupan) {
      return res.status(404).json({
        status: "error",
        message: "Coupan not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Coupan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteCoupan = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllCoupan = await Coupan.find(query);

    if (!AllCoupan.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Coupan not found",
      });
    }

    await Coupan.deleteMany(query);

    return res.status(200).json({
      status: "success",
      message: "All Coupan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
