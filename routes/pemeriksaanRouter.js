import { Router } from "express";
import {
  allPemeriksaanHardware,
  allPemeriksaanSoftware,
  createPemeriksaanHardware,
  createPemeriksaanSoftware,
  detailPemeriksaanHardwareById,
  detailPemeriksaanSoftwareById,
  editPemeriksaanHardware,
  editPemeriksaanSoftware,
  deletePemeriksaanHardware,
  deletePemeriksaanSoftware,
  statusValidasiLaboranPemeriksaanHardware,
  statusValidasiLaboranPemeriksaanSoftware,
  addDetailPemeriksaanHardware,
  editDetailPemeriksaanHardware,
  deleteDetailPemeriksaanHardware,
  addDetailPemeriksaanSoftware,
  editDetailPemeriksaanSoftware,
  deleteDetailPemeriksaanSoftware,
  statusValidasiKalabPemeriksaanHardware,
  statusValidasiKalabPemeriksaanSoftware,
  statusDiterimaPemeriksaanHardware,
  statusDiterimaPemeriksaanSoftware,
  historyPemeriksaanHardware,
  historyPemeriksaanSoftware,
  getHasilPemeriksaanHardwareValidasiLaboran,
  getHasilPemeriksaanSoftwareValidasiLaboran,
  getPemeriksaanHardwareById
} from "../controller/pemeriksaanController.js";
const router = Router();

//pemeriksaan hardware
router
  .route("/hardware")
  .get(allPemeriksaanHardware)
  .post(createPemeriksaanHardware);

router
  .route("/hardware/:id")
  .get(getPemeriksaanHardwareById)
  .put(editPemeriksaanHardware)
  .delete(deletePemeriksaanHardware);
router.route("/hardware/detail/:id").get(detailPemeriksaanHardwareById)

router
  .route("/hardware/validasi-laboran/:id")
  .put(statusValidasiLaboranPemeriksaanHardware);
router
  .route("/hardware/:id/validasi-kalab")
  .put(statusValidasiKalabPemeriksaanHardware);
router.route("/hardware/:id/diterima").put(statusDiterimaPemeriksaanHardware);
router.route("/history/hardware").get(historyPemeriksaanHardware);

router.route("/hardware/:id/detail").post(addDetailPemeriksaanHardware);
router
  .route("/hardware/:id/detail/:idDetail")
  .put(editDetailPemeriksaanHardware)
  .delete(deleteDetailPemeriksaanHardware);

  router.route("/hasil-pemeriksaan-hardware-laboran").get(getHasilPemeriksaanHardwareValidasiLaboran)
//batas pemeriksaan hardware

//pemeriksaan software
router
  .route("/software")
  .post(createPemeriksaanSoftware)
  .get(allPemeriksaanSoftware);
router
  .route("/software/:id")
  .get(detailPemeriksaanSoftwareById)
  .put(editPemeriksaanSoftware)
  .delete(deletePemeriksaanSoftware);
router
  .route("/software/:id/validasi-laboran")
  .put(statusValidasiLaboranPemeriksaanSoftware);
router
  .route("/software/:id/validasi-kalab")
  .put(statusValidasiKalabPemeriksaanSoftware);
router.route("/software/:id/diterima").put(statusDiterimaPemeriksaanSoftware);
router.route("/history/software").get(historyPemeriksaanSoftware);

router.route("/software/:id/detail").post(addDetailPemeriksaanSoftware);
router
  .route("/software/:id/detail/:idDetail")
  .put(editDetailPemeriksaanSoftware)
  .delete(deleteDetailPemeriksaanSoftware);

  router
    .route("/hasil-pemeriksaan-software-laboran")
    .get(getHasilPemeriksaanSoftwareValidasiLaboran);

//batas pemeriksaan software
export default router;
