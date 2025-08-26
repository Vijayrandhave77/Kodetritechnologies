import express from "express";
import {
  adminCreate,
  adminDelete,
  adminLogin,
  adminLogOut,
  adminSignup,
  adminUpdate,
} from "../../../controllers/authentications/admins/admin.controller.js";
import { adminAuthMiddleware } from "../../../middlewares/adminAuthMiddleware.js";

const router = express.Router();

router.post("/signup", adminSignup);
router.post("/login", adminLogin);
router.post("/create", adminCreate);
router.patch("/update/:id", adminAuthMiddleware, adminUpdate);
router.patch("/delete/:id", adminAuthMiddleware, adminDelete);
router.get("/logout", adminAuthMiddleware, adminLogOut);
export default router;
