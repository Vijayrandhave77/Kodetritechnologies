import expres from "express";
import "dotenv/config";
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

app.use("/api/users", usersRouter);
app.use("/api/configuration", ConfigurationRouter);
app.use("/api/cms", CmsRouter);
app.use("/api/ecommerce", EcommerceRouter);
app.use("/api/dashboardlogs", DashboardlogsRouter);

app.listen(PORT, () => {
  console.log(`Kodetritechnologies server is running on port ${PORT}`);
});
