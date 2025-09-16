import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
    },
    publish_date: {
      type: Date,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    website: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Website",
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
blogSchema.plugin(mongoosePaginate);
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
