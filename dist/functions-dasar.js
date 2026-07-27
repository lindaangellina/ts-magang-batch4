"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/functions-dasar.ts
// ============================================
// SOAL 1 — Hitung Nilai Akhir
// ============================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}
console.log("=== SOAL 1: NILAI AKHIR ===");
console.log(`Nilai akhir Linda: ${hitungNilaiAkhir(98, 90, 95)}`);
// ============================================
// SOAL 2 — Buat Pengumuman
// ============================================
function buatPengumuman(judul, isi, penting = false) {
    const judulAkhir = penting ? `[PENTING] ${judul}` : judul;
    if (isi) {
        return `${judulAkhir}: ${isi}`;
    }
    return judulAkhir;
}
console.log("\n=== SOAL 2: PENGUMUMAN ===");
console.log(buatPengumuman("Belajar TypeScript", "Materi Functions Dasar", true));
console.log(buatPengumuman("Meeting Magang", "Jam 10 di ruang rapat"));
console.log(buatPengumuman("Checkpoint Minggu 3"));
// ============================================
// SOAL 3 — Log Check-In
// ============================================
function logCheckIn(nama, waktu) {
    console.log(`[CHECK-IN] ${nama} - ${waktu}`);
}
console.log("\n=== SOAL 3: CHECK-IN ===");
logCheckIn("Linda Angellina", "08:00");
logCheckIn("Aura Sukma", "08:05");
logCheckIn("Saidatul Kholidiya", "08:10");
// ============================================
// SOAL 4 — Format Durasi
// ============================================
function formatDurasi(menit, tampilkanDetik = false) {
    const jam = Math.floor(menit / 60);
    const sisaMenit = menit % 60;
    const detik = 0;
    let hasil = "";
    if (jam > 0) {
        hasil += `${jam} jam `;
    }
    if (sisaMenit > 0 || jam === 0) {
        hasil += `${sisaMenit} menit`;
    }
    if (tampilkanDetik) {
        hasil += ` ${detik} detik`;
    }
    return hasil.trim();
}
console.log("\n=== SOAL 4: FORMAT DURASI ===");
console.log(formatDurasi(150));
console.log(formatDurasi(150, true));
console.log(formatDurasi(45));
