import { response } from "../utils/response.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
import { db } from "../model/connection.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  // Check if username and password are provided
  if (!username || !password) {
    return response(
      res,
      StatusCodes.BAD_REQUEST,
      null,
      "Username atau password belum diisi"
    );
  }

  // Check user credentials in the database
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";

  try {
    const connection = await db.getConnection();
    const [rows, fields] = await connection.query({
      sql: query,
      values: [username, password],
    });

    if (!rows || rows.length === 0) {
      return response(res, StatusCodes.NOT_FOUND, null, "User tidak ditemukan");
    }

    const user = rows[0];
    // Compare the provided password with the hashed password stored in the database
    const isPasswordCorrect = password == user.password;
    if (!isPasswordCorrect) {
      return response(res, StatusCodes.UNAUTHORIZED, null, "Password salah");
    }

    // If the password is correct, create a JWT token
    const token = createJWT({ userId: user.id, role: user.role });

    // Set the token as a cookie
    res.cookie("token", token, {
      secure: false,
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    });
    connection.release();
    // Respond with success message and user data
    return response(res, StatusCodes.OK, { user, token }, "Login berhasil");
  } catch (error) {
    console.error("Error during login:", error);
    return response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      null,
      "Terjadi kesalahan saat login"
    );
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  return response(res, StatusCodes.OK, "", "Logged Out");
};
