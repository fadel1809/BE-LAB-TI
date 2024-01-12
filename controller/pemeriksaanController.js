import { StatusCodes } from "http-status-codes";
import { response } from "../utils/response.js";
import { connection } from "../model/connection.js";
export const allPemeriksaanHardware = async (req, res, next) => {
  return response(res, StatusCodes.OK, null, "all Pemeriksaan");
};
