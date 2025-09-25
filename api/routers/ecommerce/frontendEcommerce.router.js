import express from "express";
const router = express.Router();
import { customerAuthMiddleware } from "../../middlewares/customerAuthMiddleware.js";
import {
  createCustomerReview,
  customerReviewDelete,
  customerReviewUpdate,
  getCustomerReview,
} from "../../controllers/ecommerce/review.controller.js";

router.get("/", customerAuthMiddleware, getCustomerReview);
router.post("/create", customerAuthMiddleware, createCustomerReview);
router.patch("/update", customerAuthMiddleware, customerReviewUpdate);
router.delete("/delete/:id", customerAuthMiddleware, customerReviewDelete);

export default router;
