import { verifyJWT } from "../utils/tokenUtils.js";
import { response } from "../utils/response.js";
import { StatusCodes } from "http-status-codes";
import { db } from "../model/connection.js";
export const authenticateUser = async (req, res, next) => {
  if (!req.cookies.token) {
    return response(res, StatusCodes.UNAUTHORIZED, null, "no token");
  }
  try {
    const { userId, role } = verifyJWT(req.cookies.token);
    req.user = { userId, role };
    next();
  } catch (error) {
    return response(res, StatusCodes.UNAUTHORIZED, null, "Unauthenticated");
  }
};
