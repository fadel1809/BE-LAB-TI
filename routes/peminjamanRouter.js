import { Router } from "express";
import {
  allPeminjamanAlat,
  createPeminjamanAlat,
  statusDikembalikanPeminjamanAlat,
  statusDiterimaPeminjamanAlat,
  statusDitolakPeminjamanAlat,
  historyPeminjamanAlat,
  hapusHistoryPeminjamanAlat,
  allPeminjamanAlatById,
  allPeminjamanRuang,
  createPeminjamanRuang,
  statusDiterimaPeminjamanRuang,
  statusDitolakPeminjamanRuang,
  historyPeminjamanRuang,
  hapusHistoryPeminjamanRuang,
  allPeminjamanRuangbyId,
  statusSelesaiPeminjamanRuang,
  statusValidasiKalabPeminjamanAlat,
  statusValidasiLaboranPeminjamanAlat,
  statusValidasiLaboranPeminjamanRuang,
  getPeminjamanRuangStatusDipinjam,
  getPeminjamanAlatStatusDipinjam
} from "../controller/peminjamanController.js";
const router = Router();

//peminjaman alat
router.route("/alat").get(allPeminjamanAlat);
router.route("/alat/dipinjam").get(getPeminjamanAlatStatusDipinjam)
router.route("/alat/:idUser").post(createPeminjamanAlat);
router.route("/alat/:idUser/all-peminjaman-alat").get(allPeminjamanAlatById);
router.route("/alat/:id/validasi-laboran").put(statusValidasiLaboranPeminjamanAlat)
router.route("/alat/:id/diterima").put(statusDiterimaPeminjamanAlat);
router.route("/alat/:id/ditolak").put(statusDitolakPeminjamanAlat);
router.route("/alat/:id/dikembalikan").put(statusDikembalikanPeminjamanAlat);
router.route("/alat/history").get(historyPeminjamanAlat);
router.route("/alat/history/:id").delete(hapusHistoryPeminjamanAlat);

//peminjaman ruang
router.route("/ruang").get(allPeminjamanRuang);
router.route("/ruang/dipinjam").get(getPeminjamanRuangStatusDipinjam)
router.route("/ruang/:idUser").post(createPeminjamanRuang);
router.route("/ruang/:idUser/all-peminjaman-ruang").get(allPeminjamanRuangbyId);
router.route("/ruang/:id/validasi-laboran").put(statusValidasiLaboranPeminjamanRuang)
router.route("/ruang/:id/diterima").put(statusDiterimaPeminjamanRuang);
router.route("/ruang/:id/ditolak").put(statusDitolakPeminjamanRuang);
router.route("/ruang/:id/selesai").put(statusSelesaiPeminjamanRuang);
router.route("/ruang/history").get(historyPeminjamanRuang);
router.route("/ruang/history/:id").delete(hapusHistoryPeminjamanRuang);
export default router;
