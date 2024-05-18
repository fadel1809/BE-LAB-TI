import { Router } from "express";
import {dashboardAslab,dashboardKalab,dashboardLaboran} from "../controller/dashboardController.js"


const router = Router()
router.route("/dashboard-aslab").get(dashboardAslab)
router.route("/dashboard-kalab").get(dashboardKalab)
router.route("/dashboard-laboran").get(dashboardLaboran)


export default router