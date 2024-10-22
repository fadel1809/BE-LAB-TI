import { Router } from "express";
import { getCurrentUser, userById } from "../controller/userController.js";
const router = Router();

router.route("/current-user").get(getCurrentUser);
router.route("/user/:id").get(userById)
export default router;
