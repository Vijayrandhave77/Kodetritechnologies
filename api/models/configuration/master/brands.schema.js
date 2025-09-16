import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const brandsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
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
brandsSchema.plugin(mongoosePaginate);

const Brands = mongoose.model("Brands", brandsSchema);

export default Brands;
