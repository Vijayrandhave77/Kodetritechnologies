import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
    },
    publish_date: {
      type: Date,
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

testimonialSchema.plugin(mongoosePaginate);
const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
