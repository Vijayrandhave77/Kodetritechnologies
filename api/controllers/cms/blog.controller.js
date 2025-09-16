import { generateOptions } from "../../helpers/mongooseHelper.js";
import { slugGenerator } from "../../helpers/slugGenerator.js";
import Blog from "../../models/cms/blog.schema.js";

export const getBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: null };
    const options = generateOptions(req);
    const blog = await Blog.paginate(query, options);

    return res.status(200).json({
      status: "success",
      message: "fetch Blog successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getTrashBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const query = { admin: _id, website, deletedAt: { $ne: null } };
    const options = generateOptions(req);
    const Blogs = await Blog.paginate(query, options);

    return res.status(200).json({
      status: "success",
      message: "fetch Trash Blogs successfully",
      data: Blogs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const query = { _id: id, admin: _id, website, deletedAt: null };

    const Blogs = await Blog.findOne(query);

    return res.status(200).json({
      status: "success",
      message: "fetch Blogs successfully",
      data: Blogs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const data = req.body;
    const slug = await slugGenerator(data.title, Blog);

    const payload = {
      ...data,
      slug,
      admin: _id,
      website,
    };

    const blog = await Blog.create(payload);
    return res.status(201).json({
      status: "success",
      message: "Blog create successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { id } = req.params;
    const payload = req.body;
    const query = {
      _id: id,
      admin: _id,
      website,
    };

    const response = await Blog.findOneAndUpdate(query, payload);
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

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: { $ne: null } };
    const deleteBlog = await Blog.deleteOne(query);

    if (!deleteBlog) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const trashBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: null };
    const deleteBlog = await Blog.findOne(query);

    if (!deleteBlog) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndUpdate(
      { _id: id },
      { deletedAt: new Date() },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Blog trash successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiDeleteBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: { $ne: null },
      _id: { $in: ids },
    };
    const AllBlog = await Blog.find(query);

    if (!AllBlog.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }

    await Blog.deleteMany(query);

    return res.status(200).json({
      status: "success",
      message: "All Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const multiTrashBlog = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const ids = req.body;
    const query = {
      admin: _id,
      website,
      deletedAt: null,
      _id: { $in: ids },
    };
    const AllBlog = await Blog.find(query);

    if (!AllBlog.length > 0) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }

    await Blog.updateMany(query, {
      $set: { deletedAt: new Date(), updatedAt: new Date() },
    });

    return res.status(200).json({
      status: "success",
      message: "All Blog trashed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const restoreTrashBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, website } = req.admin;
    const query = { _id: id, admin: _id, website, deletedAt: { $ne: null } };
    const Blogs = await Blog.findOne(query);
    if (!Blogs) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }

    await Blog.updateOne(query, { $set: { deletedAt: null } });
    return res.status(200).json({
      status: "success",
      message: "Blog restore successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
