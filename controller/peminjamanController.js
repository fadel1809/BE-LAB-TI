import { db } from "../model/connection.js";
import { response } from "../utils/response.js";

// Peminjaman alat
export const allPeminjamanAlat = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'pending'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const getPeminjamanAlatStatusDiterima = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'diterima'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const getPeminjamanAlatStatusValidasiLaboran = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'validasi_laboran'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const getPeminjamanRuangStatusValidasiLaboran = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'validasi_laboran'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const createPeminjamanAlat = async (req, res) => {
  const { idUser } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_alat (id_user,nama,nidn,keperluan,jenis_barang,tanggal_peminjaman,tanggal_pengembalian,filename) VALUES (?,?,?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query(`SELECT * FROM user WHERE id = ?`, [
      idUser,
    ]);
    if (cekID.length === 0) {
      connection.release();
      return response(res, 404, null, "User not found");
    }
    console.log(req.file.filename)
    await connection.query(query, [
      cekID[0].id,
      cekID[0].username,
      dataBody.nidn,
      dataBody.keperluan,
      dataBody.jenis_barang,
      dataBody.tanggal_peminjaman,
      dataBody.tanggal_pengembalian,
      req.file.filename
    ]);

    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusValidasiLaboranPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman alat not found");
    } else {
      await connection.query(query, ["validasi_laboran", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusDiterimaPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman alat not found");
    } else {
      await connection.query(query, ["diterima", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusDitolakPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `UPDATE peminjaman_alat SET status=?,catatan=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman alat not found");
    } else {
      await connection.query(query, ["ditolak", dataBody.catatan, cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusDikembalikanPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman alat not found");
    } else {
      await connection.query(query, ["dikembalikan", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const historyPeminjamanAlat = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'dikembalikan'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const hapusHistoryPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM peminjaman_alat WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman alat not found");
    } else {
      await connection.query(query, [cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const allPeminjamanAlatById = async (req, res) => {
  const { idUser } = req.params;
  console.log(idUser)
  const query = `SELECT id,nama,nidn,keperluan,jenis_barang,tanggal_peminjaman,tanggal_pengembalian,catatan,status FROM peminjaman_alat WHERE id_user=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_alat WHERE id_user=${idUser}`
    );
   
      const [result] = await connection.query(query, [idUser]);
      connection.release();
      return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

// Peminjaman ruang
export const allPeminjamanRuang = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'pending'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const getPeminjamanRuangStatusDiterima = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'diterima'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const createPeminjamanRuang = async (req, res) => {
  const { idUser } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_ruang (id_user,nama,nim,keperluan,ruang,tanggal_peminjaman,jam_mulai,jam_selesai,filename) VALUES (?,?,?,?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query(`SELECT * FROM user WHERE id = ?`, [
      idUser,
    ]);
    if (cekID.length === 0) {
      connection.release();
      return response(res, 404, null, "User not found");
    }

    await connection.query(query, [
      cekID[0].id,
      cekID[0].username,
      dataBody.nim,
      dataBody.keperluan,
      dataBody.ruang,
      dataBody.tanggal_peminjaman,
      dataBody.jam_mulai,
      dataBody.jam_selesai,
      req.file.filename
    ]);
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusValidasiLaboranPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman ruang not found");
    } else {
      await connection.query(query, ["validasi_laboran", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusDiterimaPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman ruang not found");
    } else {
      await connection.query(query, ["diterima", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusDitolakPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `UPDATE peminjaman_ruang SET status=?,catatan=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman ruang not found");
    } else {
      await connection.query(query, ["ditolak", dataBody.catatan, cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const statusSelesaiPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman ruang not found");
    } else {
      await connection.query(query, ["selesai", cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const historyPeminjamanRuang = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'selesai'`;
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query(query);
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const hapusHistoryPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM peminjaman_ruang WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id=?`,
      [id]
    );
    if (cekId.length === 0) {
      connection.release();
      return response(res, 404, null, "Peminjaman ruang not found");
    } else {
      await connection.query(query, [cekId[0].id]);
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};

export const allPeminjamanRuangbyId = async (req, res) => {
  const { idUser } = req.params;
  const query = `SELECT nama,nim,keperluan,ruang,tanggal_peminjaman,jam_mulai,jam_selesai,catatan,status FROM peminjaman_ruang WHERE id_user=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query(
      `SELECT * FROM peminjaman_ruang WHERE id_user=${idUser}`
    );

      const [result] = await connection.query(query, [idUser]);
      connection.release();
      return response(res, 200, result, "success");
    
  } catch (error) {
    console.error(error);
    return response(res, 500, null, "Internal server error");
  }
};
