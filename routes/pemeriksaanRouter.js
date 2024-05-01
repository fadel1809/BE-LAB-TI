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
  getPemeriksaanHardwareById,
  getPemeriksaanSoftwareById,
  statusRevisiPemeriksaanHardware,
  statusRevisiPemeriksaanSoftware,
  deleteHistoryPemeriksaanHardware,
  deleteHistoryPemeriksaanSoftware,
  getDetailPemeriksaanHardwareById,
  getDetailPemeriksaanSoftwareById,
  getHasilPemeriksaanHardwareValidasiKalab,
  getHasilPemeriksaanSoftwareValidasiKalab
} from "../controller/pemeriksaanController.js";
const router = Router();

//!!pemeriksaan hardware
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
router.route("/hardware/revisi/:id").put(statusRevisiPemeriksaanHardware)
router
  .route("/hardware/validasi-kalab/:id")
  .put(statusValidasiKalabPemeriksaanHardware);
router.route("/hardware/diterima/:id").put(statusDiterimaPemeriksaanHardware);
router.route("/history/hardware").get(historyPemeriksaanHardware);
router.route("/history/hardware/:id/delete").delete(deleteHistoryPemeriksaanHardware)

router.route("/detail-hardware/:id").post(addDetailPemeriksaanHardware);
router
  .route("/detail-hardware/:id/detail/:idDetail")
  .get(getDetailPemeriksaanHardwareById)
  .put(editDetailPemeriksaanHardware)
  .delete(deleteDetailPemeriksaanHardware);



  router.route("/hasil-pemeriksaan-hardware-laboran").get(getHasilPemeriksaanHardwareValidasiLaboran)
    router
      .route("/hasil-pemeriksaan-hardware-kalab")
      .get(getHasilPemeriksaanHardwareValidasiKalab);

//batas pemeriksaan hardware

//!!pemeriksaan software
router
  .route("/software")
  .post(createPemeriksaanSoftware)
  .get(allPemeriksaanSoftware);
router
  .route("/software/:id")
  .get(getPemeriksaanSoftwareById)
  .put(editPemeriksaanSoftware)
  .delete(deletePemeriksaanSoftware);
router
router
  .route("/software/detail/:id")
  .get(detailPemeriksaanSoftwareById)

  router.route("/software/validasi-laboran/:id")
  .put(statusValidasiLaboranPemeriksaanSoftware);
  router.route("/software/revisi/:id").put(statusRevisiPemeriksaanSoftware)
router
  .route("/software/validasi-kalab/:id")
  .put(statusValidasiKalabPemeriksaanSoftware);
router.route("/software/diterima/:id").put(statusDiterimaPemeriksaanSoftware);
router.route("/history/software").get(historyPemeriksaanSoftware);
router
  .route("/history/software/:id/delete")
  .delete(deleteHistoryPemeriksaanSoftware);

router.route("/detail-software/:id").post(addDetailPemeriksaanSoftware);
router
  .route("/detail-software/:id/detail/:idDetail")
  .get(getDetailPemeriksaanSoftwareById)
  .put(editDetailPemeriksaanSoftware)
  .delete(deleteDetailPemeriksaanSoftware);

  router
    .route("/hasil-pemeriksaan-software-laboran")
    .get(getHasilPemeriksaanSoftwareValidasiLaboran);
router
  .route("/hasil-pemeriksaan-software-kalab")
  .get(getHasilPemeriksaanSoftwareValidasiKalab);
//batas pemeriksaan software
export default router;
