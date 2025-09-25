import express from "express";
const router = express.Router();
import {
  adminCreate,
  adminLogin,
  adminLogOut,
  adminSignup,
  adminUpdate,
  getAdminData,
} from "../../controllers/authentications/admin.controller.js";
import {
  adminCustomerCreate,
  adminCustomerDelete,
  adminCustomerMultiDelete,
  adminCustomerMultiTrash,
  adminCustomerRestoreTrash,
  adminCustomerTrash,
  adminCustomerUpdate,
  customerLogin,
  customerSignup,
  CustomerUpdate,
  getAdminCustomerById,
  getAdminCustomers,
  getAdminCustomersTrash,
} from "../../controllers/authentications/customer.controller.js";
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import { customerAuthMiddleware } from "../../middlewares/customerAuthMiddleware.js";

// Admin Routes
router.post("/admin/signup", adminSignup);
router.post("/admin/login", adminLogin);
router.get("/admin/getAdmin", adminAuthMiddleware, getAdminData);
router.post("/admin/create", adminCreate);
router.patch("/admin/update/:id", adminAuthMiddleware, adminUpdate);
router.get("/admin/logout", adminAuthMiddleware, adminLogOut);

// Customer Routes

router.post("/customer/signup", customerSignup);
router.post("/customer/login", customerLogin);
router.post("/customer/update", customerAuthMiddleware, CustomerUpdate);
router.post("/admin/customer/create", adminAuthMiddleware, adminCustomerCreate);
router.get("/admin/customers/all", adminAuthMiddleware, getAdminCustomers);
router.get(
  "/admin/customers/trash/all",
  adminAuthMiddleware,
  getAdminCustomersTrash
);
router.get(
  "/admin/customer/byId/:id",
  adminAuthMiddleware,
  getAdminCustomerById
);
router.patch(
  "/admin/customer/update/:id",
  adminAuthMiddleware,
  adminCustomerUpdate
);
router.delete(
  "/admin/customer/delete/:id",
  adminAuthMiddleware,
  adminCustomerDelete
);
router.delete(
  "/admin/customer/trash/:id",
  adminAuthMiddleware,
  adminCustomerTrash
);
router.post(
  "/admin/customer/multi-delete",
  adminAuthMiddleware,
  adminCustomerMultiDelete
);
router.post(
  "/admin/customer/multi-trash",
  adminAuthMiddleware,
  adminCustomerMultiTrash
);
router.delete(
  "/admin/customer/restore/:id",
  adminAuthMiddleware,
  adminCustomerRestoreTrash
);

export default router;
