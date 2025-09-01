import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  //   logo: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "File",
  //     required: true,
  //   },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

const Website = mongoose.model("Website", websiteSchema);

export default Website;
