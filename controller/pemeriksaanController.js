import { db } from "../model/connection.js";
import { StatusCodes } from "http-status-codes";
import { response } from "../utils/response.js";
import {
  createDetailPemeriksaanHardware,
  createDetailPemeriksaanSoftware,
  createDetailHardware,
  createDetailSoftware,
  editDetailHardware,
  editDetailSoftware,
  deleteDetailHardware,
  deleteDetailSoftware,
} from "../utils/pemeriksaan.js";

export const allPemeriksaanHardware = async (req, res) => {
  const query = `SELECT * FROM pemeriksaan_hardware WHERE status_pemeriksaan = 'pengecekan' || status_pemeriksaan = 'revisi'`;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, rows, "success");
  } catch (err) {
    console.log(err);
    return response(res, 500, null, "Terjadi kesalahan server");
  }
};
export const allPemeriksaanSoftware = async (req, res) => {
  const query = `SELECT * FROM pemeriksaan_software WHERE status_pemeriksaan = 'pengecekan' || status_pemeriksaan = 'revisi'`;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, rows, "success");
  } catch (err) {
    console.log(err);
    return response(res, 500, null, "Terjadi kesalahan server");
  }
};
export const historyPemeriksaanHardware = async (req, res) => {
  const query = `SELECT * FROM pemeriksaan_hardware WHERE status_pemeriksaan = 'diterima' `;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, rows, "success");
  } catch (err) {
    console.log(err);
    return response(res, 500, null, "Terjadi kesalahan server");
  }
};
export const historyPemeriksaanSoftware = async (req, res) => {
  const query = `SELECT * FROM pemeriksaan_software WHERE status_pemeriksaan = 'diterima'`;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, rows, "success");
  } catch (err) {
    console.log(err);
    return response(res, 500, null, "Terjadi kesalahan server");
  }
};
// Fungsi untuk membuat pemeriksaan hardware utama
export const createPemeriksaanHardware = async (req, res) => {
  const { tanggal, staff_lab, laboratorium, status_pemeriksaan } = req.body;

  if (!tanggal && !staff_lab && !laboratorium && !status_pemeriksaan) {
    return response(res, 500, null, "Isi data terlebih dahulu!");
  }
  const date = new Date();
  const quarter = Math.floor((date.getMonth() + 3) / 3);
  // Membuat pemeriksaan hardware utama
  const queryCreatePemeriksaan = `
    INSERT INTO pemeriksaan_hardware (kuartal,tanggal, staff_lab, laboratorium, status_pemeriksaan)
    VALUES (?, ?, ?, ?,?)
  `;

  try {
    // Memasukkan data pemeriksaan hardware utama ke dalam database
    const connection = await db.getConnection();
    const result = await connection.execute(queryCreatePemeriksaan, [
      quarter,
      tanggal,
      staff_lab,
      laboratorium,
      status_pemeriksaan,
    ]);

    // Mendapatkan ID pemeriksaan hardware yang baru saja dibuat
    const pemeriksaanId = result[0].insertId;
    await createDetailPemeriksaanHardware(pemeriksaanId, laboratorium);
    connection.release();
    return response(
      res,
      200,
      { message: "Pemeriksaan hardware berhasil dibuat" },
      ""
    );
  } catch (error) {
    console.error("Error creating pemeriksaan hardware: ", error);
    return response(
      res,
      500,
      { error: "Gagal membuat pemeriksaan hardware" },
      ""
    );
  }
};

export const createPemeriksaanSoftware = async (req, res) => {
  const { tanggal, staff_lab, laboratorium, status_pemeriksaan } = req.body;

  if (!tanggal && !staff_lab && !laboratorium && !status_pemeriksaan) {
    return response(res, 500, null, "Isi data terlebih dahulu!");
  }
  const date = new Date();
  const quarter = Math.floor((date.getMonth() + 3) / 3);
  // Membuat pemeriksaan hardware utama
  const queryCreatePemeriksaan = `
    INSERT INTO pemeriksaan_software (kuartal,tanggal, staff_lab, laboratorium, status_pemeriksaan)
    VALUES (?, ?, ?, ?,?)
  `;

  try {
    // Memasukkan data pemeriksaan hardware utama ke dalam database
    const connection = await db.getConnection();
    const result = await connection.execute(queryCreatePemeriksaan, [
      quarter,
      tanggal,
      staff_lab,
      laboratorium,
      status_pemeriksaan,
    ]);

    // Mendapatkan ID pemeriksaan hardware yang baru saja dibuat
    const pemeriksaanId = result[0].insertId;
    await createDetailPemeriksaanSoftware(pemeriksaanId, laboratorium);
    connection.release();
    return response(
      res,
      200,
      { message: "Pemeriksaan software berhasil dibuat" },
      ""
    );
  } catch (error) {
    console.error("Error creating pemeriksaan hardware: ", error);
    return response(
      res,
      500,
      { error: "Gagal membuat pemeriksaan hardware" },
      ""
    );
  }
};

export const detailPemeriksaanHardwareById = async (req, res) => {
  const { id } = req.params;
  let laboratorium = "";
  let queryDetail = "";
  if (!id) {
    return response(res, 404, null, "Not Found");
  }
  const queryCreator = `SELECT * FROM pemeriksaan_hardware where id = ${id}`;
  try {
    const connection = await db.getConnection();
    const [userCreator, fields] = await connection.query({
      sql: queryCreator,
    });
    laboratorium = userCreator[0].laboratorium;
    let idPemeriksaan = userCreator[0].id;
    if (laboratorium == "FTTI1") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_hardware_ftti1 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI2") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_hardware_ftti2 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI3") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_hardware_ftti3 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI4") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_hardware_ftti4 where id_pemeriksaan=${idPemeriksaan}`;
    }
    const [detailPemeriksaan] = await connection.query({
      sql: queryDetail,
    });
    return response(res, 200, { userCreator, detailPemeriksaan }, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};

export const detailPemeriksaanSoftwareById = async (req, res) => {
  const { id } = req.params;
  let laboratorium = "";
  let queryDetail = "";
  if (!id) {
    return response(res, 404, null, "Not Found");
  }
  const queryCreator = `SELECT * FROM pemeriksaan_software where id = ${id}`;
  try {
    const connection = await db.getConnection();
    const [userCreator, fields] = await connection.query({
      sql: queryCreator,
    });
    if (!userCreator) {
      return response(res, 404, null, "User Not Found");
    }
    laboratorium = userCreator[0].laboratorium;
    let idPemeriksaan = userCreator[0].id;
    if (laboratorium == "FTTI1") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_software_ftti1 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI2") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_software_ftti2 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI3") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_software_ftti3 where id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium == "FTTI4") {
      queryDetail = `SELECT * FROM detail_pemeriksaan_software_ftti4 where id_pemeriksaan=${idPemeriksaan}`;
    }
    const [detailPemeriksaan] = await connection.query({
      sql: queryDetail,
    });
    return response(res, 200, { userCreator, detailPemeriksaan }, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};

export const editPemeriksaanHardware = async (req, res) => {
  const { id } = req.params;
  const { tanggal, staff_lab } = req.body;
  if (!id) {
    return response(res, 404, null, "Not Found");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware where id = ${id}`;
  let queryEditPemeriksaan = "";
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    queryEditPemeriksaan =
      "UPDATE `pemeriksaan_hardware` SET `tanggal`=?,`staff_lab`=? WHERE id=?";
    await connection.query(queryEditPemeriksaan, [tanggal, staff_lab, id]);
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 404, null, "gagal edit pemeriksaan hardware");
  }
};

export const editPemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;
  const { tanggal, staff_lab } = req.body;
  if (!id) {
    return response(res, 404, null, "Not Found");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software where id = ${id}`;
  let queryEditPemeriksaan = "";
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    queryEditPemeriksaan =
      "UPDATE `pemeriksaan_software` SET `tanggal`=?,`staff_lab`=? WHERE id=?";
    await connection.query(queryEditPemeriksaan, [tanggal, staff_lab, id]);
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 404, null, "gagal edit pemeriksaan hardware");
  }
};

export const deletePemeriksaanHardware = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return response(res, 500, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware where id = ${id}`;

  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    let queryHapusDetailPemeriksaan = "";
    if (laboratorium == "FTTI1") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_hardware_ftti1 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI2") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_hardware_ftti2 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI3") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_hardware_ftti3 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI4") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_hardware_ftti4 WHERE id_pemeriksaan=${idPemeriksaan}`;
    }
    const [result] = await connection.query({
      sql: queryHapusDetailPemeriksaan,
    });
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
  }
};

export const deletePemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return response(res, 500, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software where id = ${id}`;

  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    let queryHapusDetailPemeriksaan = "";
    if (laboratorium === "FTTI1") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_software_ftti1 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI2") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_software_ftti2 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI3") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_software_ftti3 WHERE id_pemeriksaan=${idPemeriksaan}`;
    } else if (laboratorium === "FTTI4") {
      queryHapusDetailPemeriksaan = `DELETE FROM detail_pemeriksaan_software_ftti4 WHERE id_pemeriksaan=${idPemeriksaan}`;
    }
    const [result] = await connection.query({
      sql: queryHapusDetailPemeriksaan,
    });
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};

export const statusValidasiLaboranPemeriksaanHardware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_hardware` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (
      await connection.query(queryValidasi, ["validasi_laboran", idPemeriksaan])
    ) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};

export const statusValidasiLaboranPemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_software` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (
      await connection.query(queryValidasi, ["validasi_laboran", idPemeriksaan])
    ) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};
export const statusValidasiKalabPemeriksaanHardware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_hardware` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (
      await connection.query(queryValidasi, ["validasi_kalab", idPemeriksaan])
    ) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};
export const statusValidasiKalabPemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_software` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (
      await connection.query(queryValidasi, ["validasi_kalab", idPemeriksaan])
    ) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};

export const statusDiterimaPemeriksaanHardware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_hardware` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (await connection.query(queryValidasi, ["diterima", idPemeriksaan])) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};
export const statusDiterimaPemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;

  const queryValidasi =
    "UPDATE `pemeriksaan_software` SET `status_pemeriksaan`=? WHERE id=?";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "fail");
    }
    const idPemeriksaan = pemeriksaan[0].id;

    if (await connection.query(queryValidasi, ["diterima", idPemeriksaan])) {
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "fail");
  }
};
export const addDetailPemeriksaanHardware = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return response(res, 404, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;

  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;

    if (await createDetailHardware(idPemeriksaan, laboratorium, req.body)) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};
export const addDetailPemeriksaanSoftware = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return response(res, 404, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;

  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;

    if (await createDetailSoftware(idPemeriksaan, laboratorium, req.body)) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};
export const editDetailPemeriksaanHardware = async (req, res) => {
  const { id, idDetail } = req.params;

  if (!id) {
    return response(res, 404, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    if (
      await editDetailHardware(idPemeriksaan, idDetail, laboratorium, req.body)
    ) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const editDetailPemeriksaanSoftware = async (req, res) => {
  const { id, idDetail } = req.params;

  if (!id) {
    return response(res, 404, null, "failed");
  }
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    if (
      await editDetailSoftware(idPemeriksaan, idDetail, laboratorium, req.body)
    ) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteDetailPemeriksaanHardware = async (req, res) => {
  const { id, idDetail } = req.params;
  if (!id && !idDetail) {
    return response(res, 404, null, "failed");
  }
  let queryDelete = "";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_hardware WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });

    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    if (await deleteDetailHardware(idPemeriksaan, idDetail, laboratorium)) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetailPemeriksaanSoftware = async (req, res) => {
  const { id, idDetail } = req.params;
  if (!id && !idDetail) {
    return response(res, 404, null, "failed");
  }
  let queryDelete = "";
  const queryPemeriksaan = `SELECT * FROM pemeriksaan_software WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [pemeriksaan, fields] = await connection.query({
      sql: queryPemeriksaan,
    });

    if (!pemeriksaan) {
      return response(res, 404, null, "failed");
    }
    const idPemeriksaan = pemeriksaan[0].id;
    const laboratorium = pemeriksaan[0].laboratorium;
    if (await deleteDetailSoftware(idPemeriksaan, idDetail, laboratorium)) {
      return response(res, 200, null, "success");
    } else {
      return response(res, 500, null, "failed");
    }
  } catch (error) {
    console.log(error);
  }
};
