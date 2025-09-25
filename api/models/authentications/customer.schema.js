import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongoosePaginate from "mongoose-paginate-v2";
const customerScheam = new mongoose.Schema(
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
    dob: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
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

customerScheam.pre("save", async function (next) {
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

customerScheam.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

customerScheam.pre("find", function (next) {
  // this.populate("profileImage");
  next();
});
customerScheam.pre("findOne", function (next) {
  // this.populate("profileImage");
  next();
});

customerScheam.plugin(mongoosePaginate);
const Customer = mongoose.model("Customer", customerScheam);
export default Customer;
