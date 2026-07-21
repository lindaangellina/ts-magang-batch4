// src/latihan-jumat.ts

// ============================================
// SOAL 1 — Nilai Rapor
// ============================================
const nama: string = "Linda Angellina";
const kelas: string = "12 RPL 1";
const nilaiTS: number = 85;
const nilaiJS: number = 90;

const rataRata: number = (nilaiTS + nilaiJS) / 2;
const lulus: boolean = rataRata >= 75;

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
enum Prioritas {
  Rendah = "Rendah",
  Sedang = "Sedang",
  Tinggi = "Tinggi"
}

const daftarTugas: [string, Prioritas][] = [
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
function hitungDiskon(harga: number, diskon: number | string): number {
  let persentaseDiskon: number = 0;

  if (typeof diskon === "number") {
    persentaseDiskon = diskon;
  } else {
    if (diskon === "MAGANG10") {
      persentaseDiskon = 10;
    } else if (diskon === "NAWASENA20") {
      persentaseDiskon = 20;
    } else {
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