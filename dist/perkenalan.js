"use strict";
// src/perkenalan.ts
// Isi dengan data diri sendiri — jangan copy milik teman
const namaSaya = "Linda Angellina"; // ← isi nama kamu
const asalSekolah = "SMK 5 Malang"; // ← SMK 5 Malang atau SMK 6 Malang
// const kota: string = "Malang";
const sudahBelajarJavaScript = true; // atau false
const targetSelesaiMagang = 2026; // tahun target
// Buat fungsi perkenalan
function perkenalan(nama, sekolah, sudahJS) {
    const statusJS = sudahJS ? "sudah" : "belum";
    return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}
console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));
