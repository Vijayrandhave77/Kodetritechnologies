import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongoosePaginate from "mongoose-paginate-v2";
const adminSchema = new mongoose.Schema(
  {
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
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "File",
    //  required:true,
    //   default: null,
    // },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
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

adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
