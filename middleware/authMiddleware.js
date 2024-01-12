import { verifyJWT } from "../utils/tokenUtils.js";
import { response } from "../utils/response.js";
import { StatusCodes } from "http-status-codes";
export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return response(res, StatusCodes.UNAUTHORIZED, null, "Unautenticated");
  }
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    return response(res, StatusCodes.UNAUTHORIZED, null, "Unauthenticated");
  }
};
