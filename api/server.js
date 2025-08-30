import expres from "express";
import "dotenv/config";
import "./DATABASE.js";
const app = expres();
const PORT = process.env.PORT || 5000;
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import adminRouter from "./routers/authentications/admins/admin.router.js";

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

app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Kodetritechnologies server is running on port ${PORT}`);
});
