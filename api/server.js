import expres from "express";
import "dotenv/config";
import useragent from "express-useragent";
import "./DATABASE.js";
const app = expres();
const PORT = process.env.PORT || 5000;
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import usersRouter from "./routers/authentications/users.router.js";
import ConfigurationRouter from "./routers/configuration/setting.master.router.js";
import CmsRouter from "./routers/cms/cms.router.js";
import EcommerceRouter from "./routers/ecommerce/ecommerce.router.js";
import DashboardlogsRouter from "./routers/dashbordlogs/dashboardlogs.router.js";
import SupportTicketRouter from "./routers/support/supportTicket.router.js";

// Frontend
import ReviewRouter from "./routers/ecommerce/frontendEcommerce.router.js";
import ContactRouter from "./routers/cms/frontendCms.router.js";
import SupportRouter from "./routers/support/frontendSupportTicket.router.js";

app.use(useragent.express());
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,POST,PATCH,DELETE",
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Kodetritechnologies api is running...");
});

// Admin
app.use("/api/users", usersRouter);
app.use("/api/configuration", ConfigurationRouter);
app.use("/api/cms", CmsRouter);
app.use("/api/ecommerce", EcommerceRouter);
app.use("/api/dashboardlogs", DashboardlogsRouter);
app.use("/api/support", SupportTicketRouter);

// Frontend
app.use("/api/public/reviews", ReviewRouter);
app.use("/api/public/contact", ContactRouter);
app.use("/api/public/support", SupportRouter);

app.listen(PORT, () => {
  console.log(`Kodetritechnologies server is running on port ${PORT}`);
});
