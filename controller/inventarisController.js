import { db } from "../model/connection.js";
import { response } from "../utils/response.js";
export const allInventarisFtti1 = async (req, res) => {
  const query = `SELECT * FROM inventaris_ftti1 `;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const allInventarisFtti2 = async (req, res) => {
  const query = `SELECT * FROM inventaris_ftti2 `;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release()
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const allInventarisFtti3 = async (req, res) => {
  const query = `SELECT * FROM inventaris_ftti3 `;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release()
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const allInventarisFtti4 = async (req, res) => {
  const query = `SELECT * FROM inventaris_ftti4 `;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release()
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createInventarisFtti1 = async (req, res) => {
  const dataBody = req.body;
  const query = `INSERT INTO inventaris_ftti1 (no_aset,jenis,spesifikasi,posisi,keterangan) VALUES (?,?,?,?,?)`;
  if(!dataBody.no_aset &&
        !dataBody.jenis&&
        !dataBody.spesifikasi&&
        !dataBody.posisi&&
        !dataBody.keterangan){
          return response(res,500,null,failed)
        }
  try {
    const connection = await db.getConnection();
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.keterangan,
      ],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const editInventarisFtti1 = async (req, res) => {
  const dataBody = req.body;
  const { id } = req.params;
  const query = `UPDATE inventaris_ftti1 SET no_aset=?,jenis=?,spesifikasi=?,posisi=?,keterangan=? WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti1 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.keterangan,
        cekId[0].id,
      ],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const getInventarisFtti1ById = async (req,res) => {
  const {id} = req.params
  const query = `SELECT * FROM inventaris_ftti1 WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }

}


export const hapusInventarisFtti1 = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM inventaris_ftti1 WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti1 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [cekId[0].id],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};

export const createInventarisFtti2 = async (req, res) => {
  const dataBody = req.body;
  const query = `INSERT INTO inventaris_ftti2 (no_aset,jenis,spesifikasi,posisi,keterangan) VALUES (?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.posisi,
        dataBody.keterangan,
      ],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};

export const editInventarisFtti2 = async (req, res) => {
  const dataBody = req.body;
  const { id } = req.params;
  const query = `UPDATE inventaris_ftti2 SET no_aset=?,jenis=?,spesifikasi=?,posisi=?,keterangan=? WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti2 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.keterangan,
        cekId[0].id,
      ],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const getInventarisFtti2ById = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM inventaris_ftti2 WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const hapusInventarisFtti2 = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM inventaris_ftti2 WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti2 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [cekId[0].id],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};
export const createInventarisFtti3 = async (req, res) => {
  const dataBody = req.body;
  const query = `INSERT INTO inventaris_ftti3 (no_aset,jenis,spesifikasi,posisi,keterangan) VALUES (?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.posisi,
        dataBody.keterangan,
      ],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const getInventarisFtti3ById = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM inventaris_ftti3 WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const editInventarisFtti3 = async (req, res) => {
  const dataBody = req.body;
  const { id } = req.params;
  const query = `UPDATE inventaris_ftti3 SET no_aset=?,jenis=?,spesifikasi=?,posisi=?,keterangan=? WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti3 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.keterangan,
        cekId[0].id,
      ],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const hapusInventarisFtti3 = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM inventaris_ftti3 WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti3 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [cekId[0].id],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};

export const createInventarisFtti4 = async (req, res) => {
  const dataBody = req.body;
  const query = `INSERT INTO inventaris_ftti4 (no_aset,jenis,spesifikasi,posisi,keterangan) VALUES (?,?,?,?,?)`;
  try {
    const connection = await db.getConnection();
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.posisi,
        dataBody.keterangan,
      ],
    });
        connection.release();

    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const getInventarisFtti4ById = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM inventaris_ftti4 WHERE id=${id}`;
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query({
      sql: query,
    });
    connection.release();
    if (!rows) {
      return response(res, 500, null, "failed");
    } else {
      return response(res, 200, rows, "success");
    }
  } catch (error) {
    console.log(error);
  }
};
export const editInventarisFtti4 = async (req, res) => {
  const dataBody = req.body;
  const { id } = req.params;
  const query = `UPDATE inventaris_ftti4 SET no_aset=?,jenis=?,spesifikasi=?,posisi=?,keterangan=? WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti4 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [
        dataBody.no_aset,
        dataBody.jenis,
        dataBody.spesifikasi,
        dataBody.posisi,
        dataBody.keterangan,
        cekId[0].id,
      ],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, error, "failed");
  }
};
export const hapusInventarisFtti4 = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM inventaris_ftti4 WHERE id=? `;
  try {
    const connection = await db.getConnection();
    const [cekId] = await connection.query({
      sql: `SELECT * FROM inventaris_ftti4 WHERE id=${id}`,
    });
    if (!cekId) {
      return response(res, 404, null, "failed");
    }
    await connection.query({
      sql: query,
      values: [cekId[0].id],
    });
    connection.release()
    return response(res, 200, null, "success");
  } catch (error) {
    console.log(error);
    return response(res, 500, null, "failed");
  }
};
