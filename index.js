const port = 3000;
import express from "express";
import {Server} from "socket.io";
const app = express();
import cookieParser from "cookie-parser";
import { response } from "./utils/response.js";
import { db } from "./model/connection.js";
import authRouter from "./routes/authRouter.js";
import cors from "cors";
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.options("*", cors({ credentials: true, origin: "http://localhost:5173" }));

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
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pemeriksaan", authenticateUser, pemeriksaanRouter);
app.use("/api/v1/peminjaman", authenticateUser, peminjamanRouter);
app.use("/api/v1/inventaris", authenticateUser, inventarisRouter);
app.use("/api/v1/akun",authenticateUser, accountRouter)
app.use("/api/v1/dashboard", authenticateUser, dashboardRouter);
app.use("/api/v1/user", authenticateUser, userRouter);
app.use("/api/v1/message",authenticateUser,messageRouter)
const server = createServer(app)
const io = new Server(server, {cors:{origin:"http://localhost:5173",methods:["GET","POST"],credentials:true}})
let connectionCount = 0;

io.on('connection',async (socket)=>{
   connectionCount++;
   console.log(
     `A user connected: ${socket.id}. Total connections: ${connectionCount}`
   );
  socket.on("join_room", async (data) => {
     const connection = await db.getConnection();
    const [result] = await connection.query({
      sql: "SELECT * FROM messages WHERE user_id=?",
      values: data,
    });
    connection.release();
    if (result.length > 0) {
      if (!socket.rooms.has(result[0].room_id)) {
        socket.join(result[0].room_id);
        socket.emit("joined_room", result[0].room_id);
        console.log(`user joined in room ${result[0].room_id}`);
      }
    } else {
      console.log("No room found for the user");
    }
  });
  socket.on("admin_join_room", async(data) => {
    socket.join(data)
    console.log(`admin joined in room ${data}`);
  })
  socket.on
  socket.on("send_message", async(data) => {
    const connection = await db.getConnection();
    const [result] = await connection.query({sql:"INSERT INTO messages (user_id,room_id,message) VALUES (?,?,?)",values:[data.user_id,data.room_id,data.message]})
    const [message] = await connection.query({sql:"SELECT * FROM messages WHERE room_id=?",values:[data.room_id]})
    connection.release();
    socket.to(data.room_id)
    await socket.emit("receive_message",message);
    console.log(`message sent to room ${data.room_id}`);
  })

  socket.on("disconnect", () => {
    connectionCount--;
    console.log(
      `A user disconnected: ${socket.id}. Total connections: ${connectionCount}`
    );
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
