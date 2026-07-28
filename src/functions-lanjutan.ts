export {};
// src/functions-lanjutan.ts

// ============================================
// SOAL 1 — Function Overloading
// ============================================

interface Peserta {
    id: number;
    nama: string;
    nilai: number;
}

const daftarPeserta: Peserta[] = [
    { id: 1, nama: "Linda Angellina", nilai: 95 },
    { id: 2, nama: "Zidan Alfa", nilai: 90 },
    { id: 3, nama: "Aura Sukma", nilai: 80 },
    { id: 4, nama: "Saidatul Kholidiya", nilai: 75 }
];


function cariPeserta(id: number): Peserta | undefined;
function cariPeserta(nama: string): Peserta | undefined;

function cariPeserta(idOrNama: number | string): Peserta | undefined {
    if (typeof idOrNama === "number") {
        return daftarPeserta.find(p => p.id === idOrNama);
    } else {
        return daftarPeserta.find(p => p.nama === idOrNama);
    }
}

console.log("=== SOAL 1: CARI PESERTA ===");
console.log("Cari ID 2:", cariPeserta(2));
console.log('Cari nama "Linda Angellina":', cariPeserta("Linda Angellina"));
console.log('Cari nama "Ajeng":', cariPeserta("Tidak Ada"));


// ============================================
// SOAL 2 — Rest Parameters
// ============================================

function hitungRataRata(...nilai: number[]): number {
    if (nilai.length === 0) return 0;
    const total = nilai.reduce((sum, n) => sum + n, 0);
    return total / nilai.length;
}

console.log("\n=== SOAL 2: RATA-RATA ===");
console.log("Rata-rata [85, 90, 78]:", hitungRataRata(85, 90, 78));
console.log("Rata-rata kosong:", hitungRataRata());


// ============================================
// SOAL 3 — Callback
// ============================================

function urutkanPeserta(
    peserta: Peserta[],
    comparator: (a: Peserta, b: Peserta) => number
): Peserta[] {
    return [...peserta].sort(comparator);
}

console.log("\n=== SOAL 3: URUTKAN PESERTA ===");

const ascending = urutkanPeserta(daftarPeserta, (a, b) => a.nilai - b.nilai);
console.log("Ascending (nilai kecil -> besar):");
console.log(ascending.map(p => `${p.nama}: ${p.nilai}`).join(", "));

const descending = urutkanPeserta(daftarPeserta, (a, b) => b.nilai - a.nilai);
console.log("\nDescending (nilai besar -> kecil):");
console.log(descending.map(p => `${p.nama}: ${p.nilai}`).join(", "));

const byName = urutkanPeserta(daftarPeserta, (a, b) => a.nama.localeCompare(b.nama));
console.log("\nUrutkan Nama (A-Z):");
console.log(byName.map(p => `${p.nama}: ${p.nilai}`).join(", "));


// ============================================
// SOAL 4 — Higher-Order Function
// ============================================

function buatFilterNilai(minimal: number): (peserta: Peserta) => boolean {
    return (peserta: Peserta) => peserta.nilai >= minimal;
}

console.log("\n=== SOAL 4: FILTER NILAI ===");

const filterMinimal75 = buatFilterNilai(75);
const filterMinimal85 = buatFilterNilai(85);
const filterMinimal90 = buatFilterNilai(90);

console.log("Peserta dengan nilai >= 75:");
console.log(daftarPeserta.filter(filterMinimal75).map(p => `${p.nama}: ${p.nilai}`).join(", "));

console.log("\nPeserta dengan nilai >= 85:");
console.log(daftarPeserta.filter(filterMinimal85).map(p => `${p.nama}: ${p.nilai}`).join(", "));

console.log("\nPeserta dengan nilai >= 90:");
console.log(daftarPeserta.filter(filterMinimal90).map(p => `${p.nama}: ${p.nilai}`).join(", "));