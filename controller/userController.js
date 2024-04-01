import { db } from "../model/connection.js";
import { response } from "../utils/response.js";
export const getCurrentUser = async (req, res) => {
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query({
      sql: `SELECT id,role,username FROM user WHERE id=${req.user.userId}`,
    });
    let data = {};
    result.map((val) => {
      data = { id: val.id, role: val.role, username: val.username };
    });

    connection.release();
    return response(res, 200, { user: data }, "success");
  } catch (error) {
    console.log(error);
  }
};
