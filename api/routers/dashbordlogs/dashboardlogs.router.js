import express from "express";
const router = express.Router();
import { adminAuthMiddleware } from "../../middlewares/adminAuthMiddleware.js";
import { adminLogsCreate } from "../../controllers/dashboardlogs/adminlogs.controller.js";

router.post("/admin/log/create", adminAuthMiddleware, adminLogsCreate);

export default router;
