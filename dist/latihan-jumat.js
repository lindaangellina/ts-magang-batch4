"use strict";
// src/latihan-jumat.ts
// ============================================
// SOAL 1 — Nilai Rapor
// ============================================
const nama = "Linda Angellina";
const kelas = "12 RPL 1";
const nilaiTS = 85;
const nilaiJS = 90;
const rataRata = (nilaiTS + nilaiJS) / 2;
const lulus = rataRata >= 75;
console.log("📊 === HASIL RAPOR ===");
console.log(`Nama: ${nama}`);
console.log(`Kelas: ${kelas}`);
console.log(`Nilai TS: ${nilaiTS}`);
console.log(`Nilai JS: ${nilaiJS}`);
console.log(`Rata-rata: ${rataRata}`);
console.log(`Status: ${lulus ? "✅ LULUS" : "❌ TIDAK LULUS"}`);
// ============================================
// SOAL 2 — Enum Prioritas
// ============================================
var Prioritas;
(function (Prioritas) {
    Prioritas["Rendah"] = "Rendah";
    Prioritas["Sedang"] = "Sedang";
    Prioritas["Tinggi"] = "Tinggi";
})(Prioritas || (Prioritas = {}));
const daftarTugas = [
    ["Setup TypeScript", Prioritas.Tinggi],
    ["Baca dokumentasi", Prioritas.Sedang],
    ["Kerjakan latihan", Prioritas.Tinggi],
    ["Push ke GitHub", Prioritas.Sedang]
];
console.log("\n📋 === DAFTAR TUGAS ===");
daftarTugas.forEach(([tugas, prioritas]) => {
    console.log(`- ${tugas} (Prioritas: ${prioritas})`);
});
// ============================================
// SOAL 3 — Diskon (Bonus)
// ============================================
function hitungDiskon(harga, diskon) {
    let persentaseDiskon = 0;
    if (typeof diskon === "number") {
        persentaseDiskon = diskon;
    }
    else {
        if (diskon === "MAGANG10") {
            persentaseDiskon = 10;
        }
        else if (diskon === "NAWASENA20") {
            persentaseDiskon = 20;
        }
        else {
            persentaseDiskon = 0;
        }
    }
    return harga - (harga * persentaseDiskon / 100);
}
console.log("\n💰 === UJI COBA DISKON ===");
console.log(`Rp100.000 - diskon 10% → Rp${hitungDiskon(100000, 10)}`);
console.log(`Rp100.000 - kode MAGANG10 → Rp${hitungDiskon(100000, "MAGANG10")}`);
console.log(`Rp100.000 - kode NAWASENA20 → Rp${hitungDiskon(100000, "NAWASENA20")}`);
console.log(`Rp100.000 - kode SALAH → Rp${hitungDiskon(100000, "SALAH")}`);
