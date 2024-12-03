import { Router } from "express";
import multer from "multer"; // Import multer
import { ulid } from "ulid"; // Import ulid untuk penamaan file
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

  statusValidasiLaboranPeminjamanAlat,
  statusValidasiLaboranPeminjamanRuang,
  getPeminjamanAlatStatusDiterima,
  getPeminjamanRuangStatusDiterima,
  getPeminjamanAlatStatusValidasiLaboran,
  getPeminjamanRuangStatusValidasiLaboran,
} from "../controller/peminjamanController.js";

const router = Router();

// Setup multer storage dengan ULID
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {

    cb(null,`${ulid()}.pdf`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

// Peminjaman Alat
router.route("/alat").get(allPeminjamanAlat);
router.route("/alat/diterima").get(getPeminjamanAlatStatusDiterima);
router
  .route("/alat/validasi-laboran")
  .get(getPeminjamanAlatStatusValidasiLaboran);
router
  .route("/alat/:idUser")
  .post(upload.single("filename"),createPeminjamanAlat); // Upload file saat membuat peminjaman alat
router.route("/alat/:idUser/all-peminjaman-alat").get(allPeminjamanAlatById);
router
  .route("/alat/:id/validasi-laboran")
  .put(statusValidasiLaboranPeminjamanAlat);
router.route("/alat/:id/diterima").put(statusDiterimaPeminjamanAlat);
router.route("/alat/:id/ditolak").put(statusDitolakPeminjamanAlat);
router.route("/alat/:id/dikembalikan").put(statusDikembalikanPeminjamanAlat);
router.route("/alat/history").get(historyPeminjamanAlat);
router.route("/alat/history/:id").delete(hapusHistoryPeminjamanAlat);

// Peminjaman Ruang
router.route("/ruang").get(allPeminjamanRuang);
router.route("/ruang/diterima").get(getPeminjamanRuangStatusDiterima);
router
  .route("/ruang/validasi-laboran")
  .get(getPeminjamanRuangStatusValidasiLaboran);
router
  .route("/ruang/:idUser")
  .post(upload.single("filename"), createPeminjamanRuang); // Upload file saat membuat peminjaman ruang
router.route("/ruang/:idUser/all-peminjaman-ruang").get(allPeminjamanRuangbyId);
router
  .route("/ruang/:id/validasi-laboran")
  .put(statusValidasiLaboranPeminjamanRuang);
router.route("/ruang/:id/diterima").put(statusDiterimaPeminjamanRuang);
router.route("/ruang/:id/ditolak").put(statusDitolakPeminjamanRuang);
router.route("/ruang/:id/selesai").put(statusSelesaiPeminjamanRuang);
router.route("/ruang/history").get(historyPeminjamanRuang);
router.route("/ruang/history/:id").delete(hapusHistoryPeminjamanRuang);

export default router;
