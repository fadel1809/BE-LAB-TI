import { response } from "../utils/response.js";
import { connection } from "../model/connection.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
export const login = async (req, res) => {
  const { username, password, role } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return response(res, 400, "", "username atau password belum diisi");
  }

  // Check user credentials in the database
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";

  try {
    await connection.execute(query, [username, password], (err, result) => {
      if (err) {
        return response(res, 500, "", "something wrong");
      }
      if (result.length == 1) {
        const isPasswordCorrect = result.map(async (value) => {
          return await comparePassword(password, value.password);
        });
        if (!isPasswordCorrect) {
          return response(res, StatusCodes.NOT_FOUND, "", "Incorrect Password");
        }
        const userValue = result.map(async (value) => value);

        const oneDay = 1000 * 60 * 60 * 24;
        const token = createJWT({ userId: userValue.id, role: userValue.role });
        res.cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + oneDay),
          secure: true,
        });

        return response(res, StatusCodes.OK, result, "Login Seccessful!");
      } else {
        return response(
          res,
          StatusCodes.NOT_FOUND,
          result,
          "User Not Found, please check your username"
        );
      }
    });
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
