import { db } from "../model/connection.js";
import {response} from "../utils/response.js";


export const getMessage = async (req,res) => {
   try {
     const [rows] = await db.execute(
       "SELECT * FROM messages ORDER BY timestamp ASC"
     );
     return response(res, 200, rows, "Messages retrieved successfully");
   } catch (error) {
     console.error(error);
     return response(res, 500, null, "Failed to retrieve messages");
   }
}

export const sendMessage = async (req,res) => {
     const { user_id, text } = req.body;
     const timestamp = new Date().toISOString();

     try {
       const [result] = await db.execute(
         "INSERT INTO messages (user_id, text, timestamp) VALUES (?, ?, ?)",
         [user_id, text, timestamp]
       );
       const message = { id: result.insertId, user_id, text, timestamp };

       // Emit message to all connected clients
       req.app.get("socketio").emit("receiveMessage", message);

       return response(res, 201, message, "Message sent successfully");
     } catch (error) {
       console.error(error);
       return response(res, 500, null, "Failed to send message");
     }
}