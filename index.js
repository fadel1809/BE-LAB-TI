const port = 3000;
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import { response } from "./utils/response.js";
import { db } from "./model/connection.js";
import authRouter from "./routes/authRouter.js";
import * as dotenv from "dotenv";
import { authenticateUser } from "./middleware/authMiddleware.js";
import pemeriksaanRouter from "./routes/pemeriksaanRouter.js";
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/pemeriksaan", authenticateUser, pemeriksaanRouter);

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
