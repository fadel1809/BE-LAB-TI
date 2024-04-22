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
    connection.release()
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const getPeminjamanAlatStatusDipinjam = async (req, res) => {
  const query = `SELECT * FROM peminjaman_alat WHERE status = 'dipinjam'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const createPeminjamanAlat = async (req, res) => {
  const { idUser } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_alat (id_user,nama,nidn,keperluan,jenis_barang,tanggal_peminjaman,tanggal_pengembalian) VALUES (?,?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query({
      sql: `SELECT * FROM user WHERE id = ${idUser}`,
    });
    if (!cekID) {
      return response(res, 500, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        cekID[0].id,
        cekID[0].username,
        dataBody.nidn,
        dataBody.keperluan,
        dataBody.jenis_barang,
        dataBody.tanggal_peminjaman,
        dataBody.tanggal_pengembalian,
      ],
    });
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
  }
};
export const statusValidasiLaboranPeminjamanAlat = async (req,res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
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
        values: ["validasi_laboran", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
}
export const statusValidasiKalabPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
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
        values: ["validasi_kalab", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const statusDiterimaPeminjamanAlat = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
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
  const query = `UPDATE peminjaman_alat SET status=?,catatan=? WHERE id=?`;
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
  const query = `UPDATE peminjaman_alat SET status=? WHERE id=?`;
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
    connection.release()
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

//!!peminjaman ruang
export const allPeminjamanRuang = async (req, res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'pending'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    connection.release()
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
};
export const getPeminjamanRuangStatusDipinjam = async (req,res) => {
  const query = `SELECT * FROM peminjaman_ruang WHERE status = 'dipinjam'`;
  try {
    const connection = await db.getConnection();
    const [result, fields] = await connection.query({
      sql: query,
    });
    connection.release();
    return response(res, 200, result, "success");
  } catch (error) {
    console.log(error);
  }
}
export const createPeminjamanRuang = async (req, res) => {
  const { idUser } = req.params;
  const dataBody = req.body;
  const query = `INSERT INTO peminjaman_ruang (id_user,nama,nim,keperluan,ruang,tanggal_peminjaman,waktu_peminjaman) VALUES (?,?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();

    const [cekID] = await connection.query({
      sql: `SELECT * FROM user WHERE id = ${idUser}`,
    });
    if (!cekID) {
      return response(res, 500, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        cekID[0].id,
        cekID[0].username,
        dataBody.nim,
        dataBody.keperluan,
        dataBody.ruang,
        dataBody.tanggal_peminjaman,
        dataBody.waktu_peminjaman,
      ],
    });
    connection.release();
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
  }
};
export const statusValidasiLaboranPeminjamanRuang = async(req,res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
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
        values: ["validasi_laboran", cekId[0].id],
      });
      connection.release();
      return response(res, 200, null, "success");
    }
  } catch (error) {
    console.log(error);
  }
}
export const statusDiterimaPeminjamanRuang = async (req, res) => {
  const { id } = req.params;
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
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
  const query = `UPDATE peminjaman_ruang SET status=?,catatan=? WHERE id=?`;
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
  const query = `UPDATE peminjaman_ruang SET status=? WHERE id=?`;
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
    connection.release()
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
