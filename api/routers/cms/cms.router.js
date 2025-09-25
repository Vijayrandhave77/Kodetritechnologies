import express from "express";
const router = express.Router();

import {
  createFaq,
  deleteFaq,
  getFaq,
  getFaqById,
  getTrashFaq,
  multiDelete,
  multiTrash,
  restoreTrash,
  trashFaq,
  updateFaq,
} from "../../controllers/cms/faq.controller.js";
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogById,
  getTrashBlog,
  trashBlog,
  updateBlog,
  multiTrashBlog,
  multiDeleteBlog,
  restoreTrashBlog,
} from "../../controllers/cms/blog.controller.js";
import {
  createTestimonial,
  deleteTestimonial,
  getTestimonial,
  getTestimonialById,
  getTrashTestimonial,
  multiDeleteTestimonial,
  multiTrashTestimonial,
  restoreTrashTestimonial,
  trashTestimonial,
  updateTestimonial,
} from "../../controllers/cms/testimonial.controller.js";
import {
  deleteContactAdmin,
  getContactAdmin,
  getContactByIdAdmin,
  getTrashContactAdmin,
  multiDeleteContactAdmin,
  multiTrashContactAdmin,
  restoreTrashContactAdmin,
  trashContactAdmin,
} from "../../controllers/cms/contact.controller.js";

// Blog routes
router.get("/blog", adminAuthMiddleware, getBlog);
router.get("/blog/trash", adminAuthMiddleware, getTrashBlog);
router.get("/blog/by/:id", adminAuthMiddleware, getBlogById);
router.post("/blog/create", adminAuthMiddleware, createBlog);
router.patch("/blog/update/:id", adminAuthMiddleware, updateBlog);
router.delete("/blog/delete/:id", adminAuthMiddleware, deleteBlog);
router.delete("/blog/trash/:id", adminAuthMiddleware, trashBlog);
router.post("/blog/multi-trash", adminAuthMiddleware, multiTrashBlog);
router.post("/blog/multi-delete", adminAuthMiddleware, multiDeleteBlog);
router.delete("/blog/restore/:id", adminAuthMiddleware, restoreTrashBlog);

// Testimonial routes
router.get("/testimonial", adminAuthMiddleware, getTestimonial);
router.get("/testimonial/trash", adminAuthMiddleware, getTrashTestimonial);
router.get("/testimonial/by/:id", adminAuthMiddleware, getTestimonialById);
router.post("/testimonial/create", adminAuthMiddleware, createTestimonial);
router.patch("/testimonial/update/:id", adminAuthMiddleware, updateTestimonial);
router.delete(
  "/testimonial/delete/:id",
  adminAuthMiddleware,
  deleteTestimonial
);
router.delete("/testimonial/trash/:id", adminAuthMiddleware, trashTestimonial);
router.post(
  "/testimonial/multi-trash",
  adminAuthMiddleware,
  multiTrashTestimonial
);
router.post(
  "/testimonial/multi-delete",
  adminAuthMiddleware,
  multiDeleteTestimonial
);
router.delete(
  "/testimonial/restore/:id",
  adminAuthMiddleware,
  restoreTrashTestimonial
);

// FAQs routes
router.get("/faq", adminAuthMiddleware, getFaq);
router.get("/faq/trash", adminAuthMiddleware, getTrashFaq);
router.get("/faq/by/:id", adminAuthMiddleware, getFaqById);
router.post("/faq/create", adminAuthMiddleware, createFaq);
router.patch("/faq/update/:id", adminAuthMiddleware, updateFaq);
router.delete("/faq/delete/:id", adminAuthMiddleware, deleteFaq);
router.delete("/faq/trash/:id", adminAuthMiddleware, trashFaq);
router.post("/faq/multi-trash", adminAuthMiddleware, multiTrash);
router.post("/faq/multi-delete", adminAuthMiddleware, multiDelete);
router.delete("/faq/restore/:id", adminAuthMiddleware, restoreTrash);

// Contacts
router.get("/contact", adminAuthMiddleware, getContactAdmin);
router.get("/contact/trash", adminAuthMiddleware, getTrashContactAdmin);
router.get("/contact/by/:id", adminAuthMiddleware, getContactByIdAdmin);
router.delete("/contact/delete/:id", adminAuthMiddleware, deleteContactAdmin);
router.delete("/contact/trash/:id", adminAuthMiddleware, trashContactAdmin);
router.post(
  "/contact/multi-trash",
  adminAuthMiddleware,
  multiTrashContactAdmin
);
router.post(
  "/contact/multi-delete",
  adminAuthMiddleware,
  multiDeleteContactAdmin
);
router.delete(
  "/contact/restore/:id",
  adminAuthMiddleware,
  restoreTrashContactAdmin
);

export default router;
