import { verifyToken } from "../helpers/JWT.js";
import Website from "../models/configuration/setting/website.schema.js";

export const adminAuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const tokenFromCookie = req.cookies?.adminAccessToken;
  let token;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (tokenFromCookie) {
    token = tokenFromCookie;
  }
  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = verifyToken(token);

    const websiteId = await Website.findOne({ admin: decoded._id });

    req.admin = { ...decoded, website: websiteId?._id || null };
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res
      .status(401)
      .json({ status: "error", message: "Unauthorized: Invalid token" });
  }
};
