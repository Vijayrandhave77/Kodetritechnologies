import SupportTicket from "../../models/support/support-ticket.schema.js";
import { generateOptions } from "../../helpers/mongooseHelper.js";
import { adminsLogsHelper } from "../../helpers/adminsLogsHelper.js";

export const getSupportTicketAdmin = async (req, res) => {
  try {
    const { website } = req.admin;
    const query = {
      website: website,
      deletedAt: null,
    };

    const options = {
      ...generateOptions(req),
      sort: {
        createdAt: -1,
      },
    };
    const result = await SupportTicket.paginate(query, options);
    return res.status(200).json({
      status: "success",
      message: "Support Ticket fetch successfully",
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

export const getSupportTicketByIdAdmin = async (req, res) => {
  try {
    const { website } = req.admin;
    const { id } = req.params;
    const query = {
      _id: id,
      website: website,
      deletedAt: null,
    };

    const result = await SupportTicket.findOne(query);
    return res.status(200).json({
      status: "success",
      message: "Support Ticket fetch successfully",
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

export const replySupportTicketAdmin = async (req, res) => {
  try {
    const data = req.body;
    const { website } = req.admin;

    const query = {
      website: website,
      deletedAt: null,
    };

    const message = {
      from: "admin",
      message: data.message,
      gallery: data.gallery,
    };

    const payload = {
      $set: { status: data.status },
      $push: { message: message },
    };

    await SupportTicket.updateOne(query, payload);
    return res.status(201).json({
      status: "success",
      message: "Message send successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteSupportTicketAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { website } = req.admin;
    const query = { _id: id, website, deletedAt: null };
    const deleteSupportTicket = await SupportTicket.deleteOne(query);

    if (!deleteSupportTicket) {
      return res.status(404).json({
        status: "error",
        message: "Support Ticket not found",
      });
    }
    await adminsLogsHelper(req, "Support Ticket deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Support Ticket deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteSupportTicketAdmin = async (req, res) => {
  try {
    const { website } = req.admin;
    const ids = req.body;
    const query = {
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllSupportTicket = await SupportTicket.find(query);

    if (!AllSupportTicket.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Support Ticket not found",
      });
    }

    await SupportTicket.deleteMany(query);
    await adminsLogsHelper(req, "All Support Ticket deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "All Support Ticket deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createSupportTicketCustomer = async (req, res) => {
  try {
    const { _id, website } = req.customer;
    const data = req.body;
    const payload = {
      ...data,
      customer: _id,
      website: website,
    };

    await SupportTicket.create(payload);
    return res.status(201).json({
      status: "success",
      message: "Support Ticket Created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const replySupportTicketCustomer = async (req, res) => {
  try {
    const data = req.body;
    const { _id, website } = req.customer;

    const query = {
      customer: _id,
      website: website,
      deletedAt: null,
    };

    const message = {
      from: "customer",
      message: data.message,
      gallery: data.gallery,
    };

    const payload = {
      $push: { message: message },
    };

    await SupportTicket.updateOne(query, payload);
    return res.status(201).json({
      status: "success",
      message: "Message send successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteSupportTicketCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.customer;
    const query = { _id: id, customer: _id, website, deletedAt: null };
    const deleteSupportTicket = await SupportTicket.deleteOne(query);

    if (!deleteSupportTicket) {
      return res.status(404).json({
        status: "error",
        message: "Support Ticket not found",
      });
    }
    await adminsLogsHelper(req, "Support Ticket deleted successfully");
    return res.status(200).json({
      status: "success",
      message: "Support Ticket deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
