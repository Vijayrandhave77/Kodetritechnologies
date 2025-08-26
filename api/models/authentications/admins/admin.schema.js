import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  // profileImage: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "File",
  //   default: null,
  // },
  status: {
    type: String,
    default: "active",
  },
});

adminSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

adminSchema.pre("find", function (next) {
  // this.populate("profileImage");
  next();
});
adminSchema.pre("findOne", function (next) {
  // this.populate("profileImage");
  next();
});

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
