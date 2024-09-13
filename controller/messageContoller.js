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
export const fetchAllMessage = async (req, res) => {
  const { room_id } = req.params;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: "SELECT * FROM messages ORDER BY timestamp ASC",
      values: [room_id],
    });
    connection.release();
    return response(res, 200, rows, "Last message retrieved successfully");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Failed to retrieve last message");
  }
};