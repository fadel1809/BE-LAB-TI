import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyJWT = (token) => {
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  return decode;
};
