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

export default router;
