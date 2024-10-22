import { Router } from "express";
import {fetchAllMessages, fetchMessage, sendMessage} from "../controller/messageContoller.js"
const router = Router()

router.route("/fetch-message/:room_id").get(fetchMessage);
router.route("/fetch-all-message").get(fetchAllMessages);
router.route("/send-message/:room_id").post(sendMessage)
export default router