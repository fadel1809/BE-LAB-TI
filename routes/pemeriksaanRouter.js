import { Router } from "express";
import { allPemeriksaanHardware } from "../controller/pemeriksaanController.js";
const router = Router();

router.route("/").get(allPemeriksaanHardware);

export default router;
