import { response } from "../utils/response.js";
import { StatusCodes } from "http-status-codes";
import { createJWT } from "../utils/tokenUtils.js";
import { db } from "../model/connection.js";
import bcrypt from "bcryptjs"
export const login = async (req, res) => {
  const { id_user, password } = req.body;
  if (!id_user || !password) {
    return response(
      res,
      StatusCodes.BAD_REQUEST,
      null,
      "Identitas atau password belum diisi"
    );
  }

  // Check user credentials in the database
  const query = "SELECT * FROM `user` WHERE email=? OR id_user=?";

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
      values: [id_user,id_user],
    });

    if (rows.length === 0) {
      return response(res, StatusCodes.NOT_FOUND, null, "User tidak terdaftar");
    }
    const hashedPassword = rows[0].password;
    const isUserValid = await bcrypt.compare(password, hashedPassword);
    
    if (!isUserValid) {
      return response(res, StatusCodes.NOT_FOUND, null, "Password salah!");
    }
    
    const user = rows[0];
    
    
    const token = createJWT({ userId: user.id, role: user.role });
    
    res.cookie("token", token, {
      sameSite: process.env.NODE_ENV == "development" ? "Strict" : "None" ,
      secure: process.env.NODE_ENV == "production",
      httpOnly: process.env.NODE_ENV == "development",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), 
    });
    connection.release();
    return response(res, StatusCodes.OK, token, "Login berhasil");
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
    httpOnly: process.env.NODE_ENV == "development",
    expires: new Date(Date.now()),
  });
  return response(res, StatusCodes.OK, null, "Logged Out");
};


export const register = async (req, res) => {
  const { email, username, password, id_user } = req.body;

  // Validasi input
  if (!email || !username || !password || !id_user) {
    return response(res, 400, null, "Semua field harus diisi");
  }

  let connection;

  try {
    // Koneksi database
    connection = await db.getConnection();

    // Cek apakah email sudah ada
    const [emailRows] = await connection.query(
        "SELECT * FROM user WHERE email = ?",
        [email]
    );

    if (emailRows.length > 0) {
      connection.release();
      return response(res, 409, null, "Email sudah digunakan");
    }

    // Cek apakah id_user sudah ada
    const [idUserRows] = await connection.query(
        "SELECT * FROM user WHERE id_user = ?",
        [id_user]
    );

    if (idUserRows.length > 0) {
      connection.release();
      return response(res, 409, null, "NIM/NIM/NIK sudah digunakan");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user ke database
    await connection.query(
        `INSERT INTO user (email, username, password, id_user) 
       VALUES (?, ?, ?, ?)`,
        [email, username, hashedPassword, id_user]
    );

    // Release koneksi database
    connection.release();

    return response(res, 201, null, "Registrasi berhasil");
  } catch (error) {
    console.error("Error:", error.message);
    return response(res, 500, null, "Internal Server Error");
  }
};
