"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validasi_1 = require("./utils/validasi");
console.log("=== SOAL 1: MODULES & VALIDASI ===");
const siswaa = {
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    nilai: 100
};
const siswab = {
    nama: "Sukma",
    sekolah: "SMKN 2 Malang",
    nilai: 75
};
const siswac = {
    nama: "Ri",
    sekolah: "SMKN 5 Malang",
    nilai: 120
};
const semuaPeserta = [siswaa, siswab, siswac];
console.log("\n--- VALIDASI PESERTA ---");
semuaPeserta.forEach(siswa => {
    const validNama = (0, validasi_1.isNamaValid)(siswa.nama);
    const validNilai = (0, validasi_1.isNilaiValid)(siswa.nilai);
    console.log(`\nNama: ${siswa.nama}`);
    console.log(`  Nama: ${validNama ? "valid" : "tidak valid"} (minimal 3 karakter)`);
    console.log(`  Nilai: ${validNilai ? "valid" : "tidak valid"} (0-100) → ${siswa.nilai}`);
});
// ============================================
// SOAL 2 — Generic Function
// ============================================
function getLast(arr) {
    return arr[arr.length - 1];
}
console.log("\n=== SOAL 2: GENERIC FUNCTION ===");
console.log("Last dari [1, 2, 3, 4, 5]:", getLast([1, 2, 3, 4, 5]));
console.log('Last dari ["a", "b", "c"]:', getLast(["a", "b", "c"]));
console.log("Last peserta:", getLast(semuaPeserta));
console.log("\n=== SOAL 3: GENERIC INTERFACE ===");
const responSatuPeserta = {
    success: true,
    data: siswaa,
    message: "Data peserta berhasil ditemukan"
};
const responListPeserta = {
    success: true,
    data: semuaPeserta,
    message: "Semua data peserta berhasil dimuat"
};
const responError = {
    success: false,
    data: null,
    message: "Peserta tidak ditemukan"
};
console.log("Respon 1 Peserta:", responSatuPeserta);
console.log("Respon List Peserta:", responListPeserta);
console.log("Respon Error:", responError);
const statusLinda = "aktif";
const statusZidan = "lulus";
console.log(`\nStatus Linda: ${statusLinda}`);
console.log(`Status Zidan: ${statusZidan}`);
