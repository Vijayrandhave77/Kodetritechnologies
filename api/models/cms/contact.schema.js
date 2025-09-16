import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const contactSchema = new mongoose.Schema(
  {
    data: { type: mongoose.Schema.Types.Mixed },
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

contactSchema.plugin(mongoosePaginate);
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
