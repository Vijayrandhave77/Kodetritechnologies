import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const categoriesSchema = new mongoose.Schema(
  {
    name: String,
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: String,
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      default: null,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
        default: null,
      },
    ],
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
categoriesSchema.plugin(mongoosePaginate);

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;
