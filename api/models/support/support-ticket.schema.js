import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const supportTicketSchema = new mongoose.Schema(
  {
    ticket_no: {
      type: String,
    },
    subject: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["open", "close"],
      default: "open",
    },
    message: [
      {
        from: {
          type: String,
          enum: ["customer", "admin"],
        },
        message: {
          type: String,
        },
        gallery: [String],
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
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

supportTicketSchema.pre("find", function (next) {
  this.populate("customer");
  this.populate("item");
  next();
});
supportTicketSchema.pre("findOne", function (next) {
  this.populate("customer");
  this.populate("item");
  next();
});

supportTicketSchema.plugin(mongoosePaginate);
const SupportTicket = mongoose.model("SupportTicket", supportTicketSchema);

export default SupportTicket;
