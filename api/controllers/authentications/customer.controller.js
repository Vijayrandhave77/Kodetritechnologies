import { generateHashPassword } from "../../helpers/hashPassword.js";
import { generateOptions } from "../../helpers/mongooseHelper.js";
import Customer from "../../models/authentications/customer.schema.js";

export const adminCustomerCreate = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { name, email, password } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ status: "error", message: "Name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ status: "error", message: "Email is required" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ status: "error", message: "Password is required" });
    }

    const isExistAdminCustomer = await Customer.findOne({ email: email });
    if (isExistAdminCustomer) {
      return res
        .status(409)
        .json({ status: "error", message: "Email is already registered" });
    }

    const result = await Customer.create({
      ...req.body,
      admin: _id,
      website: website,
    });

    return res.status(201).json({
      status: "success",
      message: "Customer created successfully",
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

export const getAdminCustomers = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: null };
    const options = generateOptions(req);
    const response = await Customer.paginate(query, options);
    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Customers not found" });
    }
    return res.status(200).json({
      status: "success",
      message: "Customers fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const getAdminCustomersTrash = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: { $ne: null } };
    const options = generateOptions(req);
    const response = await Customer.paginate(query, options);
    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Customers not found" });
    }
    return res.status(200).json({
      status: "success",
      message: "Customers fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const getAdminCustomerById = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const response = await Customer.findOne(query);
    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Customer not found" });
    }
    return res.status(200).json({
      status: "success",
      message: "Customer fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const adminCustomerUpdate = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const hashPassword = await generateHashPassword(data.password);
    if (data.password) {
      data.password = hashPassword;
    }
    const response = await Customer.findByIdAndUpdate({ _id: id }, { ...data });
    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Customer not found" });
    }
    return res
      .status(200)
      .json({ status: "success", message: "Customer updated successfully" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const adminCustomerDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Customer.findByIdAndDelete(id);

    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Customer not found" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Customer deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const adminCustomerMultiDelete = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: { $ne: null },
      _id: { $in: ids },
    };
    const AllCustomer = await Customer.find(query);

    if (!AllCustomer.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Customers not found",
      });
    }

    await Customer.deleteMany(query);

    return res.status(200).json({
      status: "success",
      message: "All Customers deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const adminCustomerTrash = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const trashCustomer = await Customer.findOne(query);

    if (!trashCustomer) {
      return res.status(404).json({
        status: "error",
        message: "Customer not found",
      });
    }

    await Customer.findByIdAndUpdate(
      { _id: id },
      { deletedAt: new Date() },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Customer trash successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const adminCustomerMultiTrash = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllCustomer = await Customer.find(query);

    if (!AllCustomer.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Customers not found",
      });
    }

    await Customer.updateMany(query, {
      $set: { deletedAt: new Date(), updatedAt: new Date() },
    });

    return res.status(200).json({
      status: "success",
      message: "All Customers trashed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const adminCustomerRestoreTrash = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: { $ne: null } };
    const customers = await Customer.findOne(query);
    if (!customers) {
      return res.status(404).json({
        status: "error",
        message: "Customer not found",
      });
    }

    await Customer.updateOne(query, { $set: { deletedAt: null } });
    return res.status(200).json({
      status: "success",
      message: "Customer restore successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
