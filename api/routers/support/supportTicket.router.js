import express from "express";
const router = express.Router();
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import {
  deleteSupportTicketAdmin,
  getSupportTicketAdmin,
  getSupportTicketByIdAdmin,
  multiDeleteSupportTicketAdmin,
  replySupportTicketAdmin,
} from "../../controllers/support/support-ticket.controller.js";

router.get("/support-ticket", adminAuthMiddleware, getSupportTicketAdmin);
router.get("/support-ticket/by/:id", adminAuthMiddleware, getSupportTicketByIdAdmin);
router.patch(
  "/support-ticket/reply/:id",
  adminAuthMiddleware,
  replySupportTicketAdmin
);
router.delete(
  "/support-ticket/delete/:id",
  adminAuthMiddleware,
  deleteSupportTicketAdmin
);
router.post(
  "/support-ticket/multi-delete",
  adminAuthMiddleware,
  multiDeleteSupportTicketAdmin
);

export default router;
