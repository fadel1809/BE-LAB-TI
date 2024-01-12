const port = 3000;
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import { response } from "./utils/response.js";
import { connection } from "./model/connection.js";
import authRouter from "./routes/authRouter.js";
import pemeriksaanRouter from "./routes/pemeriksaanRouter.js";
import * as dotenv from "dotenv";
import { authenticateUser } from "./middleware/authMiddleware.js";
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/pemeriksaan", authenticateUser, pemeriksaanRouter);
app.get("/", (req, res) => {
  try {
    connection.execute(
      "SELECT * FROM inventaris_pemeriksaan_hardware_ftti1",
      [],
      (err, result) => {
        console.log(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
  res.json({ msg: "test" });
});

try {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL database");
  });
  app.listen(port, () => console.log(`server is running on port ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
