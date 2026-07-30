// src/index.ts
import type { Peserta, StatusPeserta } from "./types/peserta";
import { isNamaValid, isNilaiValid } from "./utils/validasi";

console.log("=== SOAL 1: MODULES & VALIDASI ===");

const siswaa: Peserta = {
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    nilai: 100
};

const siswab: Peserta = {
    nama: "Sukma",
    sekolah: "SMKN 2 Malang",
    nilai: 75
};

const siswac: Peserta = {
    nama: "Ri",
    sekolah: "SMKN 5 Malang",
    nilai: 120
};


const semuaPeserta = [siswaa, siswab, siswac];

console.log("\n--- VALIDASI PESERTA ---");
semuaPeserta.forEach(siswa => {
    const validNama = isNamaValid(siswa.nama);
    const validNilai = isNilaiValid(siswa.nilai);
    console.log(`\nNama: ${siswa.nama}`);
    console.log(`  Nama: ${validNama ? "valid" : "tidak valid"} (minimal 3 karakter)`);
    console.log(`  Nilai: ${validNilai ? "valid" : "tidak valid"} (0-100) → ${siswa.nilai}`);
});

// ============================================
// SOAL 2 — Generic Function
// ============================================

function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

console.log("\n=== SOAL 2: GENERIC FUNCTION ===");
console.log("Last dari [1, 2, 3, 4, 5]:", getLast([1, 2, 3, 4, 5]));
console.log('Last dari ["a", "b", "c"]:', getLast(["a", "b", "c"]));
console.log("Last peserta:", getLast(semuaPeserta));

// ============================================
// SOAL 3 — Generic Interface
// ============================================

interface Respon<T> {
    success: boolean;
    data: T;
    message: string;
}

console.log("\n=== SOAL 3: GENERIC INTERFACE ===");

const responSatuPeserta: Respon<Peserta> = {
    success: true,
    data: siswaa,
    message: "Data peserta berhasil ditemukan"
};

const responListPeserta: Respon<Peserta[]> = {
    success: true,
    data: semuaPeserta,
    message: "Semua data peserta berhasil dimuat"
};

const responError: Respon<null> = {
    success: false,
    data: null,
    message: "Peserta tidak ditemukan"
};

console.log("Respon 1 Peserta:", responSatuPeserta);
console.log("Respon List Peserta:", responListPeserta);
console.log("Respon Error:", responError);

const statusLinda: StatusPeserta = "aktif";
const statusZidan: StatusPeserta = "lulus";
console.log(`\nStatus Linda: ${statusLinda}`);
console.log(`Status Zidan: ${statusZidan}`);