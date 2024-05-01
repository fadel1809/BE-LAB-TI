import { Router } from "express";
import{allStaffAccount, editStaffAccount, deleteStaffAcoount,createStaffAcoount, getAccountById} from "../controller/accountController.js"

const router = Router()

router.route("/staff").get(allStaffAccount).post(createStaffAcoount)
router.route("/staff/:id").put(editStaffAccount).delete(deleteStaffAcoount).get(getAccountById)

export default router