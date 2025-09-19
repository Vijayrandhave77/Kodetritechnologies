import express from "express";
const router = express.Router();

import {
  createCoupan,
  deleteCoupan,
  getCoupan,
  getCoupanById,
  getTrashCoupan,
  multiDeleteCoupan,
  updateCoupan,
} from "../../controllers/ecommerce/coupan.controller.js";
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import {
  createNotifications,
  deleteNotifications,
  getNotifications,
  getNotificationsById,
  getNotificationsByType,
  multiDeleteNotifications,
  updateNotifications,
} from "../../controllers/ecommerce/notification.controller.js";

// Coupan routes
router.get("/coupan", adminAuthMiddleware, getCoupan);
router.get("/coupan/trash", adminAuthMiddleware, getTrashCoupan);
router.get("/coupan/by/:id", adminAuthMiddleware, getCoupanById);
router.post("/coupan/create", adminAuthMiddleware, createCoupan);
router.patch("/coupan/update/:id", adminAuthMiddleware, updateCoupan);
router.delete("/coupan/delete/:id", adminAuthMiddleware, deleteCoupan);
router.post("/coupan/multi-delete", adminAuthMiddleware, multiDeleteCoupan);

// Notification routes
router.get("/notifications", adminAuthMiddleware, getNotifications);
router.get("/notifications/get/:id", adminAuthMiddleware, getNotificationsById);
router.get(
  "/notifications/type/:type",
  adminAuthMiddleware,
  getNotificationsByType
);
router.post("/notifications/create", adminAuthMiddleware, createNotifications);
router.patch(
  "/notifications/update/:id",
  adminAuthMiddleware,
  updateNotifications
);
router.delete(
  "/notifications/delete/:id",
  adminAuthMiddleware,
  deleteNotifications
);
router.post(
  "/notifications/multi-delete",
  adminAuthMiddleware,
  multiDeleteNotifications
);

export default router;
