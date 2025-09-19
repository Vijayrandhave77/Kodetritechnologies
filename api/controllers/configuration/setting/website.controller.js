import { adminsLogsHelper } from "../../../helpers/adminsLogsHelper.js";
import Website from "../../../models/configuration/setting/website.schema.js";

export const getWebsite = async (req, res) => {
  try {
    const { _id } = req.admin;
    const isExist = await Website.findOne({ admin: _id, deletedAt: null });
    if (!isExist) {
      return res
        .status(404)
        .json({ status: "error", message: "No website found for this admin" });
    }
    return res.status(200).json({
      status: "success",
      message: "Website data retrieved successfully",
      data: isExist,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const createWebsite = async (req, res) => {
  try {
    const { _id } = req.admin;
    const { domain } = req.body;

    const isDomain = await Website.findOne({ domain, deletedAt: null });
    if (isDomain) {
      return res
        .status(409)
        .json({ status: "error", message: "This domain already exists" });
    }

    const payload = {
      ...req.body,
      admin: _id,
    };

    const response = new Website(payload);
    await response.save();
    await adminsLogsHelper(req, "website register successfully");
    return res.status(201).json({
      status: "success",
      message: "Website registered successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateWebsite = async (req, res) => {
  try {
    const { _id } = req.admin;
    const websiteId = req.params.id;
    const data = req.body;

    const isExist = await Website.findOne({
      domain: data.domain,
      deletedAt: null,
    });

    if (isExist) {
      return res
        .status(409)
        .json({ status: "error", message: "This domain already exists" });
    }
    await Website.updateOne(
      { _id: websiteId, admin: _id },
      { $set: { ...data } }
    );
    await adminsLogsHelper(req, "website updated successfully");
    return res.status(200).json({
      status: "success",
      message: "Website information updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
