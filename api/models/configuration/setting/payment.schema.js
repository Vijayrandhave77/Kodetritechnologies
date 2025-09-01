import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  key_id: {
    type: String,
    unique: true,
  },
  key_secret: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

export default Payment = mongoose.model("Payment", paymentSchema);
