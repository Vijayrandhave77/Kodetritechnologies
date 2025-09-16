import express from "express";
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
const router = express.Router();

// Coupan routes
router.get("/coupan", adminAuthMiddleware, getCoupan);
router.get("/coupan/trash", adminAuthMiddleware, getTrashCoupan);
router.get("/coupan/by/:id", adminAuthMiddleware, getCoupanById);
router.post("/coupan/create", adminAuthMiddleware, createCoupan);
router.patch("/coupan/update/:id", adminAuthMiddleware, updateCoupan);
router.delete("/coupan/delete/:id", adminAuthMiddleware, deleteCoupan);
router.post("/coupan/multi-delete", adminAuthMiddleware, multiDeleteCoupan);

export default router;
