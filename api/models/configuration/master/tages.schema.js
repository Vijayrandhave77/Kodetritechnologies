import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const tagesSchema = new mongoose.Schema(
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
tagesSchema.plugin(mongoosePaginate);

const Tages = mongoose.model("Tages", tagesSchema);

export default Tages;
