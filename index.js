const port = 3000;
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import { response } from "./utils/response.js";
import { db } from "./model/connection.js";
import authRouter from "./routes/authRouter.js";
import cors from "cors";
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
import * as dotenv from "dotenv";
import { authenticateUser } from "./middleware/authMiddleware.js";
import pemeriksaanRouter from "./routes/pemeriksaanRouter.js";
import peminjamanRouter from "./routes/peminjamanRouter.js";
import inventarisRouter from "./routes/inventarisRouter.js";
import userRouter from "./routes/userRouter.js";
import accountRouter from "./routes/accountRouter.js"
import dashboardRouter from "./routes/dahsboardRouter.js"
dotenv.config();
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pemeriksaan", authenticateUser, pemeriksaanRouter);
app.use("/api/v1/peminjaman", authenticateUser, peminjamanRouter);
app.use("/api/v1/inventaris", authenticateUser, inventarisRouter);
app.use("/api/v1/akun",authenticateUser, accountRouter)
app.use("/api/v1/dashboard", authenticateUser, dashboardRouter);
app.use("/api/v1/user", cookieParser(), authenticateUser, userRouter);

app.get("/", async (req, res) => {
  try {
    const connection = await db.getConnection();
    const [columns, fields] = await connection.query(
      "DESCRIBE detail_pemeriksaan_hardware_ftti1"
    );
    if (!columns) {
      return response(res, 500, columns, "failed");
    }
    const columnName = columns.map((value) => {
      return value.Field;
    });
    return response(res, 200, columnName, "success");
  } catch (error) {
    console.log(error);
  }
});

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
