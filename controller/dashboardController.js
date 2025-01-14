import { db } from "../model/connection.js";
import { response } from "../utils/response.js";

export const dashboardLaboran = async (req,res) => {
const queryPemeriksaanHardwareValidasiLaboran = `SELECT COUNT(*) AS validasi_laboran_count  FROM pemeriksaan_hardware WHERE status_pemeriksaan='validasi_laboran';`
const queryPemeriksaanHardwarePengecekan = `SELECT COUNT(*) AS pengecekan_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='pengecekan'`;
const queryPemeriksaanSoftwareValidasiLaboran = `SELECT COUNT(*) AS validasi_laboran_count  FROM pemeriksaan_software WHERE status_pemeriksaan='validasi_laboran';`;
const queryPemeriksaanSoftwarePengecekan = `SELECT COUNT(*) AS pengecekan_count FROM pemeriksaan_software WHERE status_pemeriksaan='pengecekan'`;
const queryHistoryHardware = `SELECT COUNT(*) AS history_hardware_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='diterima'`
const queryHistorySoftware = `SELECT COUNT(*) AS history_software_count FROM pemeriksaan_software WHERE status_pemeriksaan='diterima'`;
const queryRevisiHardware = `SELECT COUNT(*) AS revisi_hardware_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='revisi'`
const queryRevisiSoftware = `SELECT COUNT(*) AS revisi_software_count FROM pemeriksaan_software WHERE status_pemeriksaan='revisi'`;


const queryPeminjamanAlatPending = `SELECT COUNT(*) AS peminjaman_alat_pending FROM peminjaman_alat WHERE status='pending'`
const queryPeminjamanRuangPending = `SELECT COUNT(*) AS peminjaman_ruang_pending FROM peminjaman_ruang WHERE status='pending'`
const queryBarangDipinjam = `SELECT COUNT(*) AS barang_dipinjam FROM peminjaman_alat WHERE status='diterima'`
const queryRuangDipinjam = `SELECT COUNT(*) AS ruang_dipinjam FROM peminjaman_ruang WHERE status='diterima'`

const queryInventarisFtti1 = `SELECT COUNT(*) AS inventaris_ftti1 FROM inventaris_ftti1 `
const queryInventarisFtti2 = `SELECT COUNT(*) AS inventaris_ftti2 FROM inventaris_ftti2 `;
const queryInventarisFtti3 = `SELECT COUNT(*) AS inventaris_ftti3 FROM inventaris_ftti3 `;
const queryInventarisFtti4 = `SELECT COUNT(*) AS inventaris_ftti4 FROM inventaris_ftti4 `;

try {
    const connection = await db.getConnection()
    const [validasiLaboranCount] = await connection.query({sql:queryPemeriksaanHardwareValidasiLaboran})
    const [pengecekanCount] = await connection.query({sql:queryPemeriksaanHardwarePengecekan})
    const [softwareValidasiLaboranCount] = await connection.query({sql:queryPemeriksaanSoftwareValidasiLaboran})
    const [softwarePengecekanCount] = await connection.query({sql:queryPemeriksaanSoftwarePengecekan})
    const [historyHardware] = await connection.query({sql: queryHistoryHardware});
    const [historySoftware] = await connection.query({sql: queryHistorySoftware});
    const [revisiHardware] = await connection.query({sql:queryRevisiHardware})
    const [revisiSoftware] = await connection.query({sql: queryRevisiSoftware});

    const [pendingPeminjamanAlat] = await connection.query({sql:queryPeminjamanAlatPending})
    const [pendingPeminjamanRuang] = await connection.query({sql:queryPeminjamanRuangPending})
    const [barangDipinjam]  = await connection.query({sql:queryBarangDipinjam})
    const [ruangDipinjam] = await connection.query({ sql: queryRuangDipinjam});

    const [inventarisFtti1] = await connection.query({sql:queryInventarisFtti1})
    const [inventarisFtti2] = await connection.query({ sql: queryInventarisFtti2});
    const [inventarisFtti3] = await connection.query({ sql: queryInventarisFtti3 });
    const [inventarisFtti4] = await connection.query({ sql: queryInventarisFtti4 });

    
    const data = {
    validasiLaboranCount:validasiLaboranCount[0],
    softwareValidasiLaboranCount:softwareValidasiLaboranCount[0],
    softwarePengecekanCount:softwarePengecekanCount[0],
    pengecekanCount:pengecekanCount[0],
    historyHardware:historyHardware[0],
    historySoftware:historySoftware[0],
    revisiHardware:revisiHardware[0],
    revisiSoftware:revisiSoftware[0],
    pendingPeminjamanAlat:pendingPeminjamanAlat[0],
    pendingPeminjamanRuang:pendingPeminjamanRuang[0],
    barangDipinjam:barangDipinjam[0],
    ruangDipinjam:ruangDipinjam[0],
    inventarisFtti1:inventarisFtti1[0],
    inventarisFtti2:inventarisFtti2[0],
    inventarisFtti3:inventarisFtti3[0],
    inventarisFtti4:inventarisFtti4[0]
  }
  connection.release();
    return response(res,200,data,"success")
} catch (error) {
    console.log(error)
}

}
export const dashboardKalab = async (req,res) => {
   const queryPemeriksaanHardwareValidasiKalab = `SELECT COUNT(*) AS validasi_laboran_count  FROM pemeriksaan_hardware WHERE status_pemeriksaan='validasi_kalab';`;
   const queryPemeriksaanSoftwareValidasiKalab= `SELECT COUNT(*) AS validasi_laboran_count  FROM pemeriksaan_software WHERE status_pemeriksaan='validasi_kalab';`;
   const queryHistoryHardware = `SELECT COUNT(*) AS history_hardware_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='diterima'`;
   const queryHistorySoftware = `SELECT COUNT(*) AS history_software_count FROM pemeriksaan_software WHERE status_pemeriksaan='diterima'`;


   const queryPeminjamanAlatValidasiLaboran = `SELECT COUNT(*) AS peminjaman_alat_pending FROM peminjaman_alat WHERE status='validasi_laboran'`;
   const queryPeminjamanRuangValidasiLaboran = `SELECT COUNT(*) AS peminjaman_ruang_pending FROM peminjaman_ruang WHERE status='validasi_laboran'`;
   const queryBarangDipinjam = `SELECT COUNT(*) AS barang_dipinjam FROM peminjaman_alat WHERE status='diterima'`;
   const queryRuangDipinjam = `SELECT COUNT(*) AS ruang_dipinjam FROM peminjaman_ruang WHERE status='diterima'`;

   const queryInventarisFtti1 = `SELECT COUNT(*) AS inventaris_ftti1 FROM inventaris_ftti1 `;
   const queryInventarisFtti2 = `SELECT COUNT(*) AS inventaris_ftti2 FROM inventaris_ftti2 `;
   const queryInventarisFtti3 = `SELECT COUNT(*) AS inventaris_ftti3 FROM inventaris_ftti3 `;
   const queryInventarisFtti4 = `SELECT COUNT(*) AS inventaris_ftti4 FROM inventaris_ftti4 `;

    const queryJumlahAkun = `SELECT COUNT(*) AS staff_count FROM user WHERE role='aslab' OR role='laboran'`
   try {
    const connection = await db.getConnection();
    const [validasiKalabCount] = await connection.query({
      sql: queryPemeriksaanHardwareValidasiKalab,
    });
  
    const [softwareValidasiKalabCount] = await connection.query({
      sql: queryPemeriksaanSoftwareValidasiKalab,
    });
    const [historyHardware] = await connection.query({
      sql: queryHistoryHardware,
    });
    const [historySoftware] = await connection.query({
      sql: queryHistorySoftware,
    });

    const [validasiLaboranPeminjamanAlat] = await connection.query({
      sql: queryPeminjamanAlatValidasiLaboran,
    });
    const [validasiLaboranPeminjamanRuang] = await connection.query({
      sql: queryPeminjamanRuangValidasiLaboran,
    });
    const [barangDipinjam] = await connection.query({
      sql: queryBarangDipinjam,
    });
    const [ruangDipinjam] = await connection.query({ sql: queryRuangDipinjam });

    const [inventarisFtti1] = await connection.query({
        sql: queryInventarisFtti1,
    });
    const [inventarisFtti2] = await connection.query({
        sql: queryInventarisFtti2,
    });
    const [inventarisFtti3] = await connection.query({
        sql: queryInventarisFtti3,
    });
    const [inventarisFtti4] = await connection.query({
        sql: queryInventarisFtti4,
    });
      const [jumlahAkun] = await connection.query({
        sql: queryJumlahAkun,
      });

      const data = {
        validasiKalabCount: validasiKalabCount[0],
        softwareValidasiKalabCount:softwareValidasiKalabCount[0],
        historyHardware:historyHardware[0],
        historySoftware: historySoftware[0],
        validasiLaboranPeminjamanAlat:validasiLaboranPeminjamanAlat[0],
        validasiLaboranPeminjamanRuang:validasiLaboranPeminjamanRuang[0],
        barangDipinjam:barangDipinjam[0],
        ruangDipinjam:ruangDipinjam[0],
        inventarisFtti1:inventarisFtti1[0],
        inventarisFtti2:inventarisFtti2[0],
        inventarisFtti3:inventarisFtti3[0],
        inventarisFtti4:inventarisFtti4[0],
        jumlahAkun:jumlahAkun[0],
      };
      connection.release();
      return response(res,200,data,"success")
    } catch (error) {
    console.log(error)
    }
}

export const dashboardAslab = async (req,res) => {
 const queryPemeriksaanHardwarePengecekan = `SELECT COUNT(*) AS pengecekan_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='pengecekan'`;
 const queryPemeriksaanSoftwarePengecekan = `SELECT COUNT(*) AS pengecekan_count FROM pemeriksaan_software WHERE status_pemeriksaan='pengecekan'`;
 const queryHistoryHardware = `SELECT COUNT(*) AS history_hardware_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='diterima'`;
 const queryHistorySoftware = `SELECT COUNT(*) AS history_software_count FROM pemeriksaan_software WHERE status_pemeriksaan='diterima'`;
 const queryRevisiHardware = `SELECT COUNT(*) AS revisi_hardware_count FROM pemeriksaan_hardware WHERE status_pemeriksaan='revisi'`;
 const queryRevisiSoftware = `SELECT COUNT(*) AS revisi_software_count FROM pemeriksaan_software WHERE status_pemeriksaan='revisi'`;

 const queryInventarisFtti1 = `SELECT COUNT(*) AS inventaris_ftti1 FROM inventaris_ftti1 `;
 const queryInventarisFtti2 = `SELECT COUNT(*) AS inventaris_ftti2 FROM inventaris_ftti2 `;
 const queryInventarisFtti3 = `SELECT COUNT(*) AS inventaris_ftti3 FROM inventaris_ftti3 `;
 const queryInventarisFtti4 = `SELECT COUNT(*) AS inventaris_ftti4 FROM inventaris_ftti4 `;
 try {
   const connection = await db.getConnection();
   const [pengecekanCount] = await connection.query({
     sql: queryPemeriksaanHardwarePengecekan,
   });
   const [softwarePengecekanCount] = await connection.query({
     sql: queryPemeriksaanSoftwarePengecekan,
   });
   const [historyHardware] = await connection.query({
     sql: queryHistoryHardware,
   });
   const [historySoftware] = await connection.query({
     sql: queryHistorySoftware,
   });
   const [revisiHardware] = await connection.query({
     sql: queryRevisiHardware,
   });
   const [revisiSoftware] = await connection.query({
     sql: queryRevisiSoftware,
   });

   const [inventarisFtti1] = await connection.query({
     sql: queryInventarisFtti1,
   });
   const [inventarisFtti2] = await connection.query({
     sql: queryInventarisFtti2,
   });
   const [inventarisFtti3] = await connection.query({
     sql: queryInventarisFtti3,
   });
   const [inventarisFtti4] = await connection.query({
     sql: queryInventarisFtti4,
   });

   const data = {
       pengecekanCount:pengecekanCount[0],
       softwarePengecekanCount:softwarePengecekanCount[0],
       historyHardware:historyHardware[0],
       revisiHardware:revisiHardware[0],
       revisiSoftware:revisiSoftware[0],
       historySoftware:historySoftware[0],
       inventarisFtti1:inventarisFtti1[0],
       inventarisFtti2:inventarisFtti2[0],
       inventarisFtti3:inventarisFtti3[0],
       inventarisFtti4:inventarisFtti4[0],
     }
     connection.release();
   return response(
     res,
     200,
     data,
     "success"
   );
 } catch (error) {
   console.log(error);
 }
}