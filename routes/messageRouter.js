import { Router } from "express";
import {fetchAllMessage, fetchMessage} from "../controller/messageContoller.js"
const router = Router()

router.route("/fetch-message/:room_id").get(fetchMessage);
router.route("/fetch-all-message").get(fetchAllMessage);

export default router