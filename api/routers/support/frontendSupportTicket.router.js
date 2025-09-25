import express from "express";
const router = express.Router();
import { customerAuthMiddleware } from "../../middlewares/customerAuthMiddleware.js";
import {
  createSupportTicketCustomer,
  deleteSupportTicketCustomer,
  replySupportTicketCustomer,
} from "../../controllers/support/support-ticket.controller.js";

router.post("/create", customerAuthMiddleware, createSupportTicketCustomer);
router.patch("/reply/:id", customerAuthMiddleware, replySupportTicketCustomer);
router.delete(
  "/delete/:id",
  customerAuthMiddleware,
  deleteSupportTicketCustomer
);

export default router;
