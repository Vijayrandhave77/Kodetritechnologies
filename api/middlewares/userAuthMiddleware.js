import { verifyToken } from "../JWT";

export default userAuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const tokenFromCookie = req.cookies?.userAccessToken;
  let token;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (tokenFromCookie) {
    token = tokenFromCookie;
  }
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
