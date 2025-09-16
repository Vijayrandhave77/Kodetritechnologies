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
import {
  createStore,
  getStore,
} from "../../controllers/configuration/setting/store.controller.js";
import {
  multiDeleteBrands,
  createBrands,
  deleteBrands,
  getBrands,
  getBrandsById,
  getBrandsByType,
  updateBrands,
} from "../../controllers/configuration/master/brands.controller.js";
import {
  createTages,
  deleteTages,
  getTages,
  getTagesById,
  getTagesByType,
  multiDeleteTages,
  updateTages,
} from "../../controllers/configuration/master/tages.controller.js";
import {
  categoriesTypes,
  createCategories,
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "../../controllers/configuration/master/categories.controller.js";

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

// Categories
router.post("/categories/create", adminAuthMiddleware, createCategories);
router.get("/categories/types", adminAuthMiddleware, categoriesTypes);
router.get("/categories/byId/:id", adminAuthMiddleware, getCategoryById);
router.patch("/categories/update/:id", adminAuthMiddleware, updateCategory);
router.delete("/categories/delete/:id", adminAuthMiddleware, deleteCategory);

// Brands

router.get("/brands", adminAuthMiddleware, getBrands);
router.get("/brands/get/:id", adminAuthMiddleware, getBrandsById);
router.get("/brands/type/:type", adminAuthMiddleware, getBrandsByType);
router.post("/brands/create", adminAuthMiddleware, createBrands);
router.patch("/brands/update/:id", adminAuthMiddleware, updateBrands);
router.delete("/brands/delete/:id", adminAuthMiddleware, deleteBrands);
router.post("/brands/multi-delete", adminAuthMiddleware, multiDeleteBrands);

// Tages
router.get("/tages", adminAuthMiddleware, getTages);
router.get("/tages/get/:id", adminAuthMiddleware, getTagesById);
router.get("/tages/type/:type", adminAuthMiddleware, getTagesByType);
router.post("/tages/create", adminAuthMiddleware, createTages);
router.patch("/tages/update/:id", adminAuthMiddleware, updateTages);
router.delete("/tages/delete/:id", adminAuthMiddleware, deleteTages);
router.post("/tages/multi-delete", adminAuthMiddleware, multiDeleteTages);

// status
router.get("/status", adminAuthMiddleware, getStatus);
router.get("/status/get/:id", adminAuthMiddleware, getStatusById);
router.get("/status/type/:type", adminAuthMiddleware, getStatusByType);
router.post("/status/create", adminAuthMiddleware, createStatus);
router.patch("/status/update/:id", adminAuthMiddleware, updateStatus);
router.delete("/status/delete/:id", adminAuthMiddleware, deleteStatus);
router.post("/status/multi-delete", adminAuthMiddleware, multiDelete);

export default router;
