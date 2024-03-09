import { Router } from "express";
import {
  allPeminjamanAlat,
  createPeminjamanAlat,
  statusDikembalikanPeminjamanAlat,
  statusDiterimaPeminjamanAlat,
  statusDitolakPeminjamanAlat,
  historyPeminjamanAlat,
  hapusHistoryPeminjamanAlat,
  allPeminjamanRuang,
  createPeminjamanRuang,
  statusDiterimaPeminjamanRuang,
  statusDitolakPeminjamanRuang,
  historyPeminjamanRuang,
  hapusHistoryPeminjamanRuang,
} from "../controller/peminjamanController.js";
const router = Router();

//peminjaman alat
router.route("/alat").get(allPeminjamanAlat);
router.route("/alat/:idUser").post(createPeminjamanAlat);
router.route("/alat/:id/diterima").put(statusDiterimaPeminjamanAlat);
router.route("/alat/:id/ditolak").put(statusDitolakPeminjamanAlat);
router.route("/alat/:id/dikembalikan").put(statusDikembalikanPeminjamanAlat);
router.route("/alat/history").get(historyPeminjamanAlat);
router.route("/alat/history/:id").delete(hapusHistoryPeminjamanAlat);

//peminjaman ruang
router.route("/ruang").get(allPeminjamanRuang);
router.route("/ruang/:idUser").post(createPeminjamanRuang);
router.route("/ruang/:id/diterima").put(statusDiterimaPeminjamanRuang);
router.route("/ruang/:id/ditolak").put(statusDitolakPeminjamanRuang);
router.route("/ruang/:id/selesai").put(statusDiterimaPeminjamanRuang);
router.route("/ruang/history").get(historyPeminjamanRuang);
router.route("/ruang/history/:id").delete(hapusHistoryPeminjamanRuang);
export default router;
