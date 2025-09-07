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
  deleteStatus,
  getStatus,
  getStatusById,
  getStatusByType,
  multiDelete,
  multipleRestoreTrash,
  multiTrash,
  restoreTrash,
  trashStatus,
  updateStatus,
} from "../../controllers/configuration/master/status.controller.js";
import {
  createPayment,
  getpayment,
} from "../../controllers/configuration/setting/payment.controller.js";
import {
  createFooter,
  getFooter,
} from "../../controllers/configuration/setting/footer.controller.js";
import { createStore, getStore } from "../../controllers/configuration/setting/store.controller.js";

// Setting Routes

// website
router.get("/website", adminAuthMiddleware, getWebsite);
router.post("/website/create", adminAuthMiddleware, createWebsite);
router.patch("/website/update/:id", adminAuthMiddleware, updateWebsite);

// payment
router.get("/payment/gatway/:id", adminAuthMiddleware, getpayment);
router.post("/payment/create", adminAuthMiddleware, createPayment);

// footer
router.get("/footer/type/:type", adminAuthMiddleware, getFooter);
router.post("/footer/create", adminAuthMiddleware, createFooter);

// store
router.get("/store/type/:type", adminAuthMiddleware, getStore);
router.post("/store/create", adminAuthMiddleware, createStore);

// Master Routes

// status
router.get("/status", adminAuthMiddleware, getStatus);
router.get("/status/get/:id", adminAuthMiddleware, getStatusById);
router.get("/status/type/:type", adminAuthMiddleware, getStatusByType);
router.post("/status/create", adminAuthMiddleware, createStatus);
router.patch("/status/update/:id", adminAuthMiddleware, updateStatus);
router.delete("/status/delete/:id", adminAuthMiddleware, deleteStatus);
router.delete("/status/trash/:id", adminAuthMiddleware, trashStatus);
router.post("/status/multi-trash", adminAuthMiddleware, multiTrash);
router.post("/status/multi-delete", adminAuthMiddleware, multiDelete);
router.patch("/status/restore/:id", adminAuthMiddleware, restoreTrash);
router.patch(
  "/status/multiple-restore",
  adminAuthMiddleware,
  multipleRestoreTrash
);

export default router;
