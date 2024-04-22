import { Router } from "express";
import {
  allInventarisFtti1,
  allInventarisFtti2,
  allInventarisFtti3,
  allInventarisFtti4,
  createInventarisFtti1,
  createInventarisFtti2,
  createInventarisFtti3,
  createInventarisFtti4,
  editInventarisFtti1,
  editInventarisFtti2,
  editInventarisFtti3,
  editInventarisFtti4,
  hapusInventarisFtti1,
  hapusInventarisFtti2,
  hapusInventarisFtti3,
  hapusInventarisFtti4,
  getInventarisFtti1ById,
  getInventarisFtti2ById,
  getInventarisFtti3ById,
  getInventarisFtti4ById
} from "../controller/inventarisController.js";
const router = Router();

//inventaris ftti1
router.route("/ftti1").get(allInventarisFtti1).post(createInventarisFtti1);
router
  .route("/ftti1/:id").get(getInventarisFtti1ById)
  .put(editInventarisFtti1)
  .delete(hapusInventarisFtti1);

//inventaris ftti2
router.route("/ftti2").get(allInventarisFtti2).post(createInventarisFtti2);
router
  .route("/ftti2/:id").get(getInventarisFtti2ById)
  .put(editInventarisFtti2) 
  .delete(hapusInventarisFtti2);

//inventaris ftti3
router.route("/ftti3").get(allInventarisFtti3).post(createInventarisFtti3);
router
  .route("/ftti3/:id").get(getInventarisFtti3ById)
  .put(editInventarisFtti3)
  .delete(hapusInventarisFtti3);

//inventaris ftti4
router.route("/ftti4").get(allInventarisFtti4).post(createInventarisFtti4);
router
  .route("/ftti4/:id").get(getInventarisFtti4ById)
  .put(editInventarisFtti4)
  .delete(hapusInventarisFtti4);

export default router;
