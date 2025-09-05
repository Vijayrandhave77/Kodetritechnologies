import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const statusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
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
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
statusSchema.plugin(mongoosePaginate);

const Status = mongoose.model("Status", statusSchema);

export default Status;
