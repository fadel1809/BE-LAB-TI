import { response } from "../utils/response.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
import { db } from "../model/connection.js";

export const login = async (req, res) => {
  const { username, password, role } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return response(res, 400, "", "username atau password belum diisi");
  }

  // Check user credentials in the database
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";

  try {
    const connection = await db.getConnection();
    const [rows, fields] = await connection.query({
      sql: query,
      values: [username, password],
    });
    if (!rows) {
      return response(res, 500, null, "failed");
    }
    if (rows.length == 1) {
      const isPasswordCorrect = rows.map(async (value) => {
        return await comparePassword(password, value.password);
      });
      if (!isPasswordCorrect) {
        return response(res, StatusCodes.NOT_FOUND, "", "Incorrect Password");
      }
      const userValue = rows.map(async (value) => value);

      const oneDay = 1000 * 60 * 60 * 24;
      const token = createJWT({ userId: userValue.id, role: userValue.role });
      res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: true,
      });
      connection.release();

      return response(res, StatusCodes.OK, rows, "Login Seccessful!");
    }
  } catch (error) {
    console.error(error);
  }
};
export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  return response(res, StatusCodes.OK, "", "Logged Out");
};
