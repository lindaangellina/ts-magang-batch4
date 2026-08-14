"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/generic-constraint.ts
// SOAL 1 — Constraint dengan harga
function hitungTotal(items) {
    return items.reduce((total, item) => total + item.harga, 0);
}
console.log("SOAL 1: HITUNG TOTAL");
console.log(hitungTotal([
    { barang: 'cermin kecil', harga: 2000 },
    { barang: 'kipas', harga: 8000 },
    { barang: 'pulpen', harga: 3000 }
]));
function urutkanBerdasarkanTanggal(items) {
    return [...items].sort((a, b) => Date.parse(a.tanggal) - Date.parse(b.tanggal));
}
const tugas1 = {
    tanggal: "2026-11-01",
    nama: "Membuat Web Bakery"
};
const tugas2 = {
    tanggal: "2026-11-02",
    nama: "Membuat Web Perpustkaan"
};
const tugas3 = {
    tanggal: "2026-11-03",
    nama: "Membuat Web Bank"
};
const allTugas = [tugas1, tugas2, tugas3];
console.log("\nSOAL 2: URUTKAN TANGGAL");
console.log(urutkanBerdasarkanTanggal(allTugas));
// SOAL 3 — keyof Constraint
function updateProperty(obj, key, value) {
    return { ...obj, [key]: value };
}
console.log("\nSOAL 3: UPDATE PROPERTY");
const dataPeserta = { name: "Linda Angellina", age: 17 };
console.log("Data awal:", dataPeserta);
console.log("Setelah update age:", updateProperty(dataPeserta, "age", 18));
function prosesJikaValid(item, aksi) {
    if (!item.verifikasi()) {
        console.log("Gagal verifikasi, kemungkinan error terjadi");
        return;
    }
    aksi(item);
}
class SprintTask {
    constructor(nama) {
        this.nama = nama;
    }
    verifikasi() {
        return this.nama.length > 0;
    }
    getNama() {
        return this.nama;
    }
}
console.log("\nSOAL 4: PROSES JIKA VALID");
const task = new SprintTask("Laravel Website");
prosesJikaValid(task, (t) => {
    console.log(`Data berhasil diverifikasi: ${t.verifikasi()}`);
});
