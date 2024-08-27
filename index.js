const port = 3000;
import express from "express";
import {Server} from "socket.io";
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
import messageRouter from "./routes/messageRouter.js";
import {createServer} from "http";

dotenv.config();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pemeriksaan", authenticateUser, pemeriksaanRouter);
app.use("/api/v1/peminjaman", authenticateUser, peminjamanRouter);
app.use("/api/v1/inventaris", authenticateUser, inventarisRouter);
app.use("/api/v1/akun",authenticateUser, accountRouter)
app.use("/api/v1/dashboard", authenticateUser, dashboardRouter);
app.use("/api/v1/user", authenticateUser, userRouter);
app.use("/api/v1/message",authenticateUser,messageRouter)
const server = createServer(app)
const io = new Server(server, {cors:{origin:"http://localhost:5173",methods:["GET","POST"]}})
app.get("/", async (req, res) => {
  return response(res,200,null,"welcome to my api")
});
io.on('connection',(socket)=>{
  console.log(`User connected ${socket.id}`)
  socket.on("join_room",(data) => {
    socket.join(data);
    console.log(`user joined room ${data}`)
  })
  socket.on("disconnect", () => {
    console.log("user disconnect", socket.id)
  })
})
app.set("socketio", io); 
server.listen(3001, () => console.log(`Websocket Is Running`));

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
