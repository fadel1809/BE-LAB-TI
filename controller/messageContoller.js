import { db } from "../model/connection.js";
import {response} from "../utils/response.js";


export const fetchMessage = async(req,res) => {
  const {room_id} = req.params 
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({sql:"SELECT * FROM messages WHERE room_id=? ORDER BY timestamp ASC",values:[room_id]});
    connection.release();
    return response(res, 200, rows, "Last message retrieved successfully");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Failed to retrieve last message");
  }
}

export const fetchAllMessages = async(req,res) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({sql:"SELECT * FROM messages ORDER BY timestamp ASC"});
    connection.release();
    return response(res, 200, rows, "All messages retrieved successfully");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Failed to retrieve all messages");
  }
}

export const sendMessage = async(req, res) => {
  const {room_id} = req.params
  if(!room_id) response(res, 404, null, "failed")
  if (!req.body.user_id && !req.body.username && !req.body.user_id && !req.body.message) response(res, 500, null, "failed")
    try {
      const connection = await db.getConnection();
      await connection.query({
        sql: "INSERT INTO messages (user_id,username,room_id,message) VALUES (?,?,?,?)",
        values: [
          req.body.user_id,
          req.body.username,
          req.body.room_id || req.body.user_id,
          req.body.message,
        ],
      });
      return response(res,200,null, "success")
    } catch (error) {
      console.log(error);
    }
}