import Categories from "../../../models/configuration/master/categories.schema.js";
import { slugGenerator } from "../../../helpers/slugGenerator.js";
import mongoose from "mongoose";

export const createCategories = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { name, type, parent } = req.body;

    if (!Array.isArray(name) || name.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "Name must be a non-empty array",
      });
    }

    const createdCategories = [];

    for (const singleName of name) {
      const slug = await slugGenerator(singleName, Categories);

      const payload = {
        name: singleName,
        slug,
        type,
        admin: _id,
        website,
        parent: parent || null,
      };

      const newCategory = await Categories.create(payload);
      createdCategories.push(newCategory);

      if (parent) {
        await Categories.findByIdAndUpdate(parent, {
          $push: { children: newCategory._id },
        });
      }
    }

    return res.status(201).json({
      status: "success",
      message: "Categories created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const categoriesTypes = async (req, res) => {
  try {
    const { _id, website } = req.admin;

    const query = {
      admin: new mongoose.Types.ObjectId(_id),
      website: new mongoose.Types.ObjectId(website),
      deletedAt: null,
      parent: null,
    };

    const response = await Categories.aggregate([
      { $match: query },
      {
        $group: {
          _id: "$type",
          categories: { $push: "$$ROOT" },
        },
      },
      { $unwind: "$categories" },
      {
        $lookup: {
          from: "categories",
          localField: "categories.children",
          foreignField: "_id",
          as: "categories.children",
        },
      },
      {
        $group: {
          _id: "$_id",
          categories: { $push: "$categories" },
        },
      },
    ]);

    if (!response || response.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Categories Types not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Fetch categories types successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;

    const category = await Categories.findOne({
      _id: new mongoose.Types.ObjectId(id),
      admin: new mongoose.Types.ObjectId(_id),
      website: new mongoose.Types.ObjectId(website),
      deletedAt: null,
    }).populate("parent", "name _id");

    if (!category) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const { name, type, parent } = req.body;

    const category = await Categories.findOne({
      _id: id,
      admin: new mongoose.Types.ObjectId(_id),
      website: new mongoose.Types.ObjectId(website),
      deletedAt: null,
    });

    if (!category) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    let finalName = name;
    if (Array.isArray(name)) {
      finalName = name[0];
    }

    let slug = category.slug;
    if (finalName && finalName !== category.name) {
      slug = await slugGenerator(finalName, Categories);
      category.name = finalName;
      category.slug = slug;
    }

    if (type) category.type = type;
    category.parent = parent || null;

    await category.save();

    return res.status(200).json({
      status: "success",
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;

    const category = await Categories.findOne({
      _id: id,
      admin: new mongoose.Types.ObjectId(_id),
      website: new mongoose.Types.ObjectId(website),
    });

    if (!category) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    if (category.parent) {
      await Categories.findByIdAndUpdate(category.parent, {
        $pull: { children: category._id },
      });
    }

    if (category.children && category.children.length > 0) {
      await Categories.updateMany(
        { _id: { $in: category.children } },
        { $set: { parent: null } }
      );
    }

    await Categories.deleteOne({ _id: category._id });

    return res.status(200).json({
      status: "success",
      message: "Category permanently deleted",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
