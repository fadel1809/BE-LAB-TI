const port = process.env.PORT || 3000;
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import { db } from "./model/connection.js";
import authRouter from "./routes/authRouter.js";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
app.use(helmet())
app.use(cors({ credentials: true, origin: process.env.NODE_ENV === "development" ? process.env.LOCAL_URL : process.env.DOMAIN_URL }));
app.use(cookieParser());
app.options(
  "*",
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === "development"
        ? process.env.LOCAL_URL
        : process.env.DOMAIN_URL,
  })
);

import * as dotenv from "dotenv";
import { authenticateUser } from "./middleware/authMiddleware.js";
import pemeriksaanRouter from "./routes/pemeriksaanRouter.js";
import peminjamanRouter from "./routes/peminjamanRouter.js";
import inventarisRouter from "./routes/inventarisRouter.js";
import userRouter from "./routes/userRouter.js";
import accountRouter from "./routes/accountRouter.js"
import dashboardRouter from "./routes/dahsboardRouter.js"
import messageRouter from "./routes/messageRouter.js";
import contentRouter from "./routes/contentRouter.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

dotenv.config();
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pemeriksaan", authenticateUser, pemeriksaanRouter);
app.use("/api/v1/peminjaman", authenticateUser, peminjamanRouter);
app.use("/api/v1/inventaris", authenticateUser, inventarisRouter);
app.use("/api/v1/akun",authenticateUser, accountRouter)
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/user", authenticateUser, userRouter);
app.use("/api/v1/message",authenticateUser,messageRouter)
app.use("/api/v1/content",contentRouter)

try {
  db.getConnection()
    .then((conn) => {
      console.log("Mysql is on");
      conn.release();
    })
    .catch((err) => {
      console.log("MySql is off");
    });
  app.listen(port, () => console.log(`server is running on port ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
