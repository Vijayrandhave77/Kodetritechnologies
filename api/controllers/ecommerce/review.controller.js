import { generateOptions } from "../../helpers/mongooseHelper.js";
import { adminsLogsHelper } from "../../helpers/adminsLogsHelper.js";
import Review from "../../models/ecommerce/review.schema.js";

// Admin
export const getCustomerReviewAdmin = async (req, res) => {
  try {
    const { website } = req.admin;
    const query = {
      website: website,
    };
    const options = generateOptions(req);
    const result = await Review.paginate(query,options);
    res.status(200).json({
      status: "success",
      message: "Fetch review successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteReviewAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { website } = req.admin;
    const query = { _id: id, website, deletedAt: null };
    const deletedReviews = await Review.deleteOne(query);

    if (!deletedReviews) {
      return res.status(404).json({
        status: "error",
        message: "Reviews not found",
      });
    }
    await adminsLogsHelper(req, "Reviews deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Reviews deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteReviewAdmin = async (req, res) => {
  try {
    const { website } = req.admin;
    const ids = req.body;
    const query = {
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllReviews = await Review.find(query);

    if (!AllReviews.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Reviews not found",
      });
    }
    await Review.deleteMany(query);
    await adminsLogsHelper(req, "All Reviews deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "All Reviews deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Frontend
export const getCustomerReview = async (req, res) => {
  try {
    const { _id, website } = req.customer;
    const query = {
      customer: _id,
      website: website,
    };
    const options = generateOptions(req);
    const result = await Review.paginate(query, options);
    res.status(200).json({
      status: "success",
      message: "Fetch review successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createCustomerReview = async (req, res) => {
  try {
    const { _id, website } = req.customer;
    const data = req.body;
    const payload = {
      ...data,
      customer: _id,
      website,
    };

    const result = await Review.create(payload);

    if (!result) {
      return res.status(500).json({
        status: "error",
        message: "Failed to submit review. Please try again later.",
      });
    }

    return res.status(201).json({
      status: "success",
      message: "Thank you! Your review has been submitted successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server errror",
      error: error.message,
    });
  }
};

export const customerReviewUpdate = async (req, res) => {
  try {
    const { _id, website } = req.customer;
    const { rating, message, item } = req.body;
    const query = {
      customer: _id,
      website: website,
      item: item,
    };

    const payload = {
      rating,
      message,
      item,
    };
    await Review.updateOne(query, payload);
    res.status(200).json({
      status: "success",
      message: "Your review has been updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const customerReviewDelete = async (req, res) => {
  try {
    const { _id, website } = req.customer;
    const { id } = req.params;
    const query = {
      _id: id,
      customer: _id,
      website: website,
    };

    await Review.deleteOne(query);
    res.status(200).json({
      status: "success",
      message: "Your review has been Deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
