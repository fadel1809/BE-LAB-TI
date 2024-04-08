import { db } from "../model/connection.js";
export const createDetailPemeriksaanHardware = async (pemeriksaanId, lab) => {
  // Query untuk mengambil detail pemeriksaan hardware dari tabel inventaris_pemeriksaan_hardware_ftti1
  if (lab === "FTTI1") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_hardware_ftti1
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_hardware_ftti1 (id_pemeriksaan, no_pc, no_aset, monitor, keyboard, mouse, cpu, ram, motherboard, vga, hdd, ssd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.no_aset,
            val.monitor,
            val.keyboard,
            val.mouse,
            val.cpu,
            val.ram,
            val.motherboard,
            val.vga,
            val.hdd,
            val.ssd,
          ],
        });
      });
      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI2") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_hardware_ftti2
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_hardware_ftti2 (id_pemeriksaan, no_pc, no_aset, monitor, keyboard, mouse, cpu, ram, motherboard, vga, hdd, ssd,kabel_lan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.no_aset,
            val.monitor,
            val.keyboard,
            val.mouse,
            val.cpu,
            val.ram,
            val.motherboard,
            val.vga,
            val.hdd,
            val.ssd,
            val.kabel_lan,
          ],
        });
      });
      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI3") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_hardware_ftti3
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_hardware_ftti3 (id_pemeriksaan, no_pc, no_aset, monitor, keyboard, mouse, cpu, ram, motherboard, vga, hdd, ssd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.no_aset,
            val.monitor,
            val.keyboard,
            val.mouse,
            val.cpu,
            val.ram,
            val.motherboard,
            val.vga,
            val.hdd,
            val.ssd,
          ],
        });
      });

      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI4") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_hardware_ftti4
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_hardware_ftti4 (id_pemeriksaan, no_pc, no_aset, monitor, keyboard, mouse, cpu, ram, motherboard, vga, hdd, ssd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.no_aset,
            val.monitor,
            val.keyboard,
            val.mouse,
            val.cpu,
            val.ram,
            val.motherboard,
            val.vga,
            val.hdd,
            val.ssd,
          ],
        });
      });

      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  }
};

export const createDetailPemeriksaanSoftware = async (pemeriksaanId, lab) => {
  // Query untuk mengambil detail pemeriksaan hardware dari tabel inventaris_pemeriksaan_hardware_ftti1
  if (lab === "FTTI1") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_software_ftti1
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_software_ftti1 (id_pemeriksaan, no_pc, OS,jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,python,visual_studio,sublime,pycharm,cpu_simulator,veyon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.OS,
            val.jaringan,
            val.chrome,
            val.devcpp,
            val.xampp,
            val.netbeans,
            val.office,
            val.matlab,
            val.adobe_reader,
            val.python,
            val.visual_studio,
            val.sublime,
            val.pycharm,
            val.cpu_simulator,
            val.veyon,
          ],
        });
      });
      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI2") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_software_ftti2
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_software_ftti2 (id_pemeriksaan, no_pc, OS,jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,visual_studio,balsamic,pycharm,cpu_simulator,photoshop,python,veyon,composer,arduino_ide) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.OS,
            val.jaringan,
            val.chrome,
            val.devcpp,
            val.xampp,
            val.netbeans,
            val.office,
            val.matlab,
            val.adobe_reader,
            val.visual_studio,
            val.balsamic,
            val.pycharm,
            val.cpu_simulator,
            val.photoshop,
            val.python,
            val.veyon,
            val.composer,
            val.arduino_ide,
          ],
        });
      });
      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI3") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_software_ftti3
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_software_ftti3 (id_pemeriksaan, no_pc,OS, jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,visual_studio,pycharm,astah,start_uml,visio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.OS,
            val.jaringan,
            val.chrome,
            val.devcpp,
            val.xampp,
            val.netbeans,
            val.office,
            val.matlab,
            val.adobe_reader,
            val.visual_studio,
            val.pycharm,
            val.astah,
            val.start_uml,
            val.visio,
          ],
        });
      });

      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  } else if (lab === "FTTI4") {
    const querySelectDetail = `
    SELECT * FROM inventaris_pemeriksaan_software_ftti4
  `;

    const queryCreateDetail =
      "INSERT INTO detail_pemeriksaan_software_ftti4 (id_pemeriksaan, no_pc,OS,jaringan,chrome,adobe_reader,autocad,autodesk,compas,solidwork,teamviewer,visual_studio,office) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

    try {
      const connection = await db.getConnection();
      // Mengambil data detail pemeriksaan hardware dari database
      const [rows, fields] = await connection.query({
        sql: querySelectDetail,
      });
      rows.map(async (val) => {
        await connection.query({
          sql: queryCreateDetail,
          values: [
            pemeriksaanId,
            val.no_pc,
            val.OS,
            val.jaringan,
            val.chrome,
            val.adobe_reader,
            val.autocad,
            val.autodesk,
            val.compas,
            val.solidwork,
            val.teamviewer,
            val.visual_studio,
            val.office,
          ],
        });
      });

      connection.release();
      return true;
    } catch (error) {
      console.log("gagal membuat detail pemeriksaan hardware");
      // Jika terjadi kesalahan, Anda dapat memilih untuk menggulir transaksi atau menangani secara terpisah
      throw error;
    }
  }
};

export const createDetailSoftware = async (
  idPemeriksaan,
  laboratorium,
  dataBody
) => {
  try {
    const connection = await db.getConnection();

    if (laboratorium === "FTTI1") {
      const query = `INSERT INTO detail_pemeriksaan_software_ftti1 (id_pemeriksaan, no_pc, OS,jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,python, visual_studio,sublime,pycharm,cpu_simulator,veyon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.python,
          dataBody.visual_studio,
          dataBody.sublime,
          dataBody.pycharm,
          dataBody.cpu_simulator,
          dataBody.veyon,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const query = `INSERT INTO detail_pemeriksaan_software_ftti2 (id_pemeriksaan, no_pc, OS,jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,visual_studio,balsamic,pycharm,cpu_simulator,photoshop,python,veyon,composer,arduino_ide) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.visual_studio,
          dataBody.balsamic,
          dataBody.pycharm,
          dataBody.cpu_simulator,
          dataBody.photoshop,
          dataBody.python,
          dataBody.veyon,
          dataBody.composer,
          dataBody.arduino_ide,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const query = `INSERT INTO detail_pemeriksaan_software_ftti3 (id_pemeriksaan, no_pc,OS, jaringan,chrome,devcpp,xampp,netbeans,office,matlab,adobe_reader,visual_studio,pycharm,astah,start_uml,visio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.visual_studio,
          dataBody.pycharm,
          dataBody.astah,
          dataBody.start_uml,
          dataBody.visio,
        ],
      });

      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const query = `INSERT INTO detail_pemeriksaan_software_ftti4 (id_pemeriksaan, no_pc,OS,jaringan,chrome,adobe_reader,autocad,autodesk,compas,solidwork,teamviewer,visual_studio,office) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.adobe_reader,
          dataBody.autocad,
          dataBody.autodesk,
          dataBody.compas,
          dataBody.solidwork,
          dataBody.teamviewer,
          dataBody.visual_studio,
          dataBody.office,
        ],
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createDetailHardware = async (
  idPemeriksaan,
  laboratorium,
  dataBody
) => {
  try {
    const connection = await db.getConnection();

    if (laboratorium === "FTTI1") {
      const query = `INSERT INTO detail_pemeriksaan_hardware_ftti1 (id_pemeriksaan,no_pc,no_aset,monitor,keyboard,mouse,cpu,ram,motherboard,vga,hdd,ssd,keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const query = `INSERT INTO detail_pemeriksaan_hardware_ftti2 (id_pemeriksaan,no_pc,no_aset,monitor,keyboard,mouse,cpu,ram,motherboard,vga,hdd,ssd,kabel_lan,keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.kabel_lan,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const query = `INSERT INTO detail_pemeriksaan_hardware_ftti3 (id_pemeriksaan,no_pc,no_aset,monitor,keyboard,mouse,cpu,ram,motherboard,vga,hdd,ssd,keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });

      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const query = `INSERT INTO detail_pemeriksaan_hardware_ftti4 (id_pemeriksaan,no_pc,no_aset,monitor,keyboard,mouse,cpu,ram,motherboard,vga,hdd,ssd,keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
      await connection.query({
        sql: query,
        values: [
          idPemeriksaan,
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const editDetailHardware = async (
  idPemeriksaan,
  idDetail,
  laboratorium,
  dataBody
) => {
  try {
    const connection = await db.getConnection();
    if (laboratorium === "FTTI1") {
      const query = `UPDATE detail_pemeriksaan_hardware_ftti1 SET no_pc=?,no_aset=?,monitor=?,keyboard=?,mouse=?,cpu=?,ram=?,motherboard=?,vga=?,hdd=?,ssd=?,keterangan=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const query = `UPDATE detail_pemeriksaan_hardware_ftti2 SET no_pc=?,no_aset=?,monitor=?,keyboard=?,mouse=?,cpu=?,ram=?,motherboard=?,vga=?,hdd=?,ssd=?,kabel_lan=?,keterangan=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.kabel_lan,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const query = `UPDATE detail_pemeriksaan_hardware_ftti3 SET no_pc=?,no_aset=?,monitor=?,keyboard=?,mouse=?,cpu=?,ram=?,motherboard=?,vga=?,hdd=?,ssd=?,keterangan=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const query = `UPDATE detail_pemeriksaan_hardware_ftti4 SET no_pc=?,no_aset=?,monitor=?,keyboard=?,mouse=?,cpu=?,ram=?,motherboard=?,vga=?,hdd=?,ssd=?,keterangan=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.no_aset,
          dataBody.monitor,
          dataBody.keyboard,
          dataBody.mouse,
          dataBody.cpu,
          dataBody.ram,
          dataBody.motherboard,
          dataBody.vga,
          dataBody.hdd,
          dataBody.ssd,
          dataBody.keterangan,
        ],
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const editDetailSoftware = async (
  idPemeriksaan,
  idDetail,
  laboratorium,
  dataBody
) => {
  try {
    const connection = await db.getConnection();
    if (laboratorium === "FTTI1") {
      const query = `UPDATE detail_pemeriksaan_software_ftti1 SET no_pc=?,OS=?,jaringan=?,chrome=?,devcpp=?,xampp=?,netbeans=?,office=?,matlab=?,adobe_reader=?,python=?,visual_studio=?,sublime=?,pycharm=?,cpu_simulator=?,veyon=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.python,
          dataBody.visual_studio,
          dataBody.sublime,
          dataBody.pycharm,
          dataBody.cpu_simulator,
          dataBody.veyon,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const query = `UPDATE detail_pemeriksaan_software_ftti2 SET no_pc=?,OS=?,jaringan=?,chrome=?,devcpp=?,xampp=?,netbeans=?,office=?,matlab=?,adobe_reader=?,visual_studio=?,balsamic=?,pycharm=?,cpu_simulator=?,photoshop=?,python=?,veyon=?,composer=?,arduino_ide=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.visual_studio,
          dataBody.balsamic,
          dataBody.pycharm,
          dataBody.cpu_simulator,
          dataBody.photoshop,
          dataBody.python,
          dataBody.veyon,
          dataBody.composer,
          dataBody.arduino_ide,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const query = `UPDATE detail_pemeriksaan_software_ftti3 SET no_pc=?,OS=?,jaringan=?,chrome=?,devcpp=?,xampp=?,netbeans=?,office=?,matlab=?,adobe_reader=?,visual_studio=?,pycharm=?,astah=?,start_uml=?,visio=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.devcpp,
          dataBody.xampp,
          dataBody.netbeans,
          dataBody.office,
          dataBody.matlab,
          dataBody.adobe_reader,
          dataBody.visual_studio,
          dataBody.pycharm,
          dataBody.astah,
          dataBody.start_uml,
          dataBody.visio,
        ],
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const query = `UPDATE detail_pemeriksaan_software_ftti4 SET no_pc=?,OS=?,jaringan=?,chrome=?,adobe_reader=?,autocad=?,autodesk=?,compas=?,solidwork=?,teamviewer=?,visual_studio=?,office=? WHERE id_pemeriksaan=${idPemeriksaan} && id=${idDetail}`;
      await connection.query({
        sql: query,
        values: [
          dataBody.no_pc,
          dataBody.OS,
          dataBody.jaringan,
          dataBody.chrome,
          dataBody.adobe_reader,
          dataBody.autocad,
          dataBody.autodesk,
          dataBody.compas,
          dataBody.solidwork,
          dataBody.teamviewer,
          dataBody.visual_studio,
          dataBody.office,
        ],
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetailHardware = async (
  idPemeriksaan,
  idDetail,
  laboratorium
) => {
  try {
    const connection = await db.getConnection();
    if (laboratorium === "FTTI1") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_hardware_ftti1 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_hardware_ftti1 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_hardware_ftti2 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_hardware_ftti2 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_hardware_ftti3 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_hardware_ftti3 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_hardware_ftti4 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_hardware_ftti4 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetailSoftware = async (
  idPemeriksaan,
  idDetail,
  laboratorium
) => {
  try {
    const connection = await db.getConnection();
    if (laboratorium === "FTTI1") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_software_ftti1 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_software_ftti1 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI2") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_software_ftti2 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_software_ftti2 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI3") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_software_ftti3 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_software_ftti3 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
    if (laboratorium === "FTTI4") {
      const [result, field] = await connection.query({
        sql: `SELECT * FROM detail_pemeriksaan_software_ftti4 WHERE id=${idDetail}`,
      });
      if (!result) {
        connection.release();
        return false;
      }
      await connection.query({
        sql: `DELETE FROM detail_pemeriksaan_software_ftti4 WHERE id=${idDetail} && id_pemeriksaan=${idPemeriksaan}`,
      });
      connection.release();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const editLaboratoriumHardware = async (idPemeriksaan,oldLab,newLab) => {
  try {
    const connection  = await db.getConnection()
    if (oldLab === "FTTI1") {
      let query = `DELETE FROM detail_pemeriksaan_hardware_ftti1 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({sql:query})
      
    }
    if (oldLab === "FTTI2") {
      let query = `DELETE FROM detail_pemeriksaan_hardware_ftti2 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (oldLab === "FTTI3") {
      let query = `DELETE FROM detail_pemeriksaan_hardware_ftti3 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (oldLab === "FTTI4") {
      let query = `DELETE FROM detail_pemeriksaan_hardware_ftti4 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (newLab) {
      await createDetailPemeriksaanHardware(idPemeriksaan, newLab);
    }
    connection.release()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
  
}
export const editLaboratoriumSoftware = async (
  idPemeriksaan,
  oldLab,
  newLab
) => {
  try {
    const connection = await db.getConnection();
    if (oldLab === "FTTI1") {
      let query = `DELETE FROM detail_pemeriksaan_software_ftti1 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (oldLab === "FTTI2") {
      let query = `DELETE FROM detail_pemeriksaan_software_ftti2 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (oldLab === "FTTI3") {
      let query = `DELETE FROM detail_pemeriksaan_software_ftti3 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (oldLab === "FTTI4") {
      let query = `DELETE FROM detail_pemeriksaan_software_ftti4 WHERE id_pemeriksaan = ${idPemeriksaan}`;
      await connection.query({ sql: query });
    }
    if (newLab) {
      await createDetailPemeriksaanSoftware(idPemeriksaan,newLab)
    }
    connection.release();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};