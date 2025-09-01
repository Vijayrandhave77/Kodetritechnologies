import express from "express";
const router = express.Router();
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import {
  createWebsite,
  getWebsite,
  updateWebsite,
} from "../../controllers/configuration/setting/website.controller.js";
import {
  createStatus,
  getStatus,
} from "../../controllers/configuration/master/status.controller.js";

// Setting Routes
router.get("/website", adminAuthMiddleware, getWebsite);
router.post("/website/create", adminAuthMiddleware, createWebsite);
router.patch("/website/update/:id", adminAuthMiddleware, updateWebsite);

// Master Routes

router.get("/status", adminAuthMiddleware, getStatus);
router.post("/status/create", adminAuthMiddleware, createStatus);

export default router;
