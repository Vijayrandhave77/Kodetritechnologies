import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const coupanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    code: {
      type: String,
    },
    coupan_no: {
      type: String,
    },
    discount_type: {
      type: String,
    },
    min_amount: {
      type: String,
    },
    max_amount: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    type: {
      type: String,
    },
    one_time: {
      type: Boolean,
      default: true,
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

coupanSchema.plugin(mongoosePaginate);
const Coupan = mongoose.model("Coupan", coupanSchema);
export default Coupan;
