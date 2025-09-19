import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    message: {
      type: String,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "docModel",
      required: true,
    },
    docModel: {
      type: String,
      required: true,
      enum: ["Product", "Service"],
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

reviewSchema.plugin(mongoosePaginate);
const Review = mongoose.model("Review", reviewSchema);
export default Review;
