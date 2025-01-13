import { Router } from "express";
import {editContent, getContent} from "../controller/contentController.js";
const router = Router();


router.put("/edit-content",editContent)
router.get("/get-content", getContent)

export default router;