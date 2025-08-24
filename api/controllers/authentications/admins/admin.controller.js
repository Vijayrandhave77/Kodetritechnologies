import Admin from "../../../models/authentications/admins/admin.schema.js";

export const adminSignup = async (req, res) => {
  try {
    const body = req.body;
    if (!body.name) {
      return res
        .status(500)
        .json({ status: "erorr", message: "Name shuld be require" });
    }
    if (!body.email) {
      return res
        .status(500)
        .json({ status: "error", message: "email should be require" });
    }
    if (!body.password) {
      return res
        .status(500)
        .json({ status: "error", message: "password should be require" });
    }

    if (body.password !== body.confirmPassword) {
      return res.status(500).json({
        status: "error",
        message: "password and confirm password does not match",
      });
    }
    const response = new Admin(body);
    await response.save();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
