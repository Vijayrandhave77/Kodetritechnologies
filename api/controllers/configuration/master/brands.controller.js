import mongoose from "mongoose";
import { generateOptions } from "../../../helpers/mongooseHelper.js";
import Brands from "../../../models/configuration/master/brands.schema.js";
import { adminsLogsHelper } from "../../../helpers/adminsLogsHelper.js";
export const getBrands = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
    };
    const options = generateOptions(req);

    const BrandsType = await Brands.aggregate([
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

    const response = await Brands.paginate(query, options);
    return res.status(200).json({
      status: "success",
      message: "Brands fetched successfully",
      data: response,
      type: BrandsType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getBrandsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };

    const getBrands = await Brands.findOne(query);
    if (!getBrands) {
      return res.status(404).json({
        status: "error",
        message: "Brands not found",
      });
    }

    return res.status(200).json({
      ststus: "success",
      message: "Brands fetched successfully",
      data: getBrands,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getBrandsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const { _id, website } = req.admin;
    const brandsType = await Brands.find({
      type,
      admin: _id,
      website,
      deletedAt: null,
    });

    if (!brandsType || brandsType.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No Brands found for this type",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Brands fetched successfully by type",
      data: brandsType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createBrands = async (req, res) => {
  try {
    const { name, type } = req.body;
    const { _id, website } = req.admin;

    const response = new Brands({ name, type, admin: _id, website });
    await response.save();
    await adminsLogsHelper(req, "Brands create successfully");
    return res.status(201).json({
      status: "success",
      message: "Brands created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateBrands = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedBrands = await Brands.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedBrands) {
      return res.status(404).json({
        status: "error",
        message: "Brands not found",
      });
    }
    await adminsLogsHelper(req, "Brands updated successfully");
    return res.status(200).json({
      status: "success",
      message: "Brands updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteBrands = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const deletedBrands = await Brands.deleteOne(query);

    if (!deletedBrands) {
      return res.status(404).json({
        status: "error",
        message: "Brands not found",
      });
    }
    await adminsLogsHelper(req, "Brands deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Brands deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteBrands = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllBrands = await Brands.find(query);

    if (!AllBrands.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Brands not found",
      });
    }
    await Brands.deleteMany(query);
    await adminsLogsHelper(req, "All brands deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "All Brands deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
