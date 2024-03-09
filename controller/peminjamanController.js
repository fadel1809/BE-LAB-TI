import { db } from "../model/connection.js";
import { response } from "../utils/response.js";

//peminjaman alat
export const allPeminjamanAlat = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'pending'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const createPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_alat (id_user,nama,nidn,keperluan,jenis_barang,tanggal_pemeinjaman,tanggal_pengembalian,status) VALUES (?,?,?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query({
      sql: `SELECT * FROM user WHERE id = ${id}`,
    });
    if (!cekID) {
      return response(res, 500, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        cekID[0].id,
        dataBody.nama,
        dataBody.nidn,
        dataBody.keperluan,
        dataBody.jenis_barang,
        dataBody.tanggal_peminjaman,
        dataBody.tanggal_pembelian,
        "pending",
      ],
    });
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
  }
};
export const statusDiterimaPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE FROM peminjaman_alat SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_alat WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["diterima", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const statusDitolakPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `UPDATE FROM peminjaman_alat SET status=?,catatan=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_alat WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["ditolak", dataBody.catatan, cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const statusDikembalikanPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE FROM peminjaman_alat SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_alat WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["dikembalikan", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const historyPeminjamanAlat = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'dikembalikan'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const hapusHistoryPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM peminjaman_alat WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_alat WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: [cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const allPeminjamanAlatById = async (req, res) => {
  const { idUser } = req.params;
  const query = `SELECT * FROM peminjaman_alat WHERE id_user=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_alat WHERE id_user=${idUser}`,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      const [result, fields] = await connection.query({
        sql: query,
        values: [idUser],
      });
      return response(res, 200, result, "success");
    }
  } catch (error) {
    console.log(error);
  }
};

//peminjaman ruang
export const allPeminjamanRuang = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'pending'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const createPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_alat (id_user,nama,nim,keperluan,ruang,lama_peminjaman,status) VALUES (?,?,?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query({
      sql: `SELECT * FROM user WHERE id = ${id}`,
    });
    if (!cekID) {
      return response(res, 500, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        cekID[0].id,
        dataBody.nama,
        dataBody.nim,
        dataBody.keperluan,
        dataBody.ruang,
        dataBody.lama_peminjaman,
        "pending",
      ],
    });
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
  }
};

export const statusDiterimaPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE FROM peminjaman_ruang SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_ruang WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["diterima", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};

export const statusDitolakPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const dataBody = req.body;
  const query = `UPDATE FROM peminjaman_ruang SET status=?,catatan=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_ruang WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["ditolak", dataBody.catatan, cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};

export const statusSelesaiPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE FROM peminjaman_ruang SET status=? WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_ruang WHERE id=?`,
      values: id,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: ["selesai", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};

export const historyPeminjamanRuang = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'selesai'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};

export const hapusHistoryPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM peminjaman_ruang WHERE id=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_ruang WHERE id=?`,
      values: [id],
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      await connection.query({
        sql: query,
        values: [cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const allPeminjamanRuangbyId = async (req, res) => {
  const { idUser } = req.params;
  const query = `SELECT * FROM peminjaman_ruang WHERE id_user=?`;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM peminjaman_ruang WHERE id_user=${idUser}`,
    });
    if (!cekId) {
      return response(res, 500, null, "failed");
    } else {
      const [result, fields] = await connection.query({
        sql: query,
        values: [idUser],
      });
      return response(res, 200, result, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
