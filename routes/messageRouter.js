import { Router } from "express";
import {getMessage,sendMessage} from "../controller/messageContoller.js"
const router = Router()

router.route("/message").get(getMessage).post(sendMessage);


export default router