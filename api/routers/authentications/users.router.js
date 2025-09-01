import express from "express";
import {
  adminCreate,
  adminDelete,
  adminLogin,
  adminLogOut,
  adminSignup,
  adminUpdate,
  getAdminData,
} from "../../controllers/authentications/admin.controller.js";
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";

const router = express.Router();

// Admin Routes

router.post("/admin/signup", adminSignup);
router.post("/admin/login", adminLogin);
router.get("/admin/getAdmin", adminAuthMiddleware, getAdminData);
router.post("/admin/create", adminCreate);
router.patch("/admin/update/:id", adminAuthMiddleware, adminUpdate);
router.patch("/admin/delete/:id", adminAuthMiddleware, adminDelete);
router.get("/admin/logout", adminAuthMiddleware, adminLogOut);
export default router;
