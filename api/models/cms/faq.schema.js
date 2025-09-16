import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const faqSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    publish_date: {
      type: Date,
    },
    values: [
      {
        ques: String,
        ans: String,
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

faqSchema.plugin(mongoosePaginate);
const Faq = mongoose.model("Faq", faqSchema);
export default Faq;
