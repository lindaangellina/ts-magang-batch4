"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/integrasi-minggu3.ts
// langkah 1 — Base class
class Pengguna {
    constructor(nama, email, createdAt = new Date().toISOString()) {
        this.nama = nama;
        this.email = email;
        this.createdAt = createdAt;
    }
    info() {
        return `${this.nama} (${this.email})`;
    }
}
// langkah 2 — Inheritance
class PesertaMagang extends Pengguna {
    constructor(nama, email, sekolah, fase = 1) {
        super(nama, email);
        this.sekolah = sekolah;
        this.fase = fase;
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    getRataRata() {
        if (this.nilaiList.length === 0)
            return 0;
        return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
    }
    info() {
        return `${super.info()} - ${this.sekolah}, Fase ${this.fase}`;
    }
}
function buatResponse(data, message = "OK") {
    return { success: true, data, message };
}
// langkah 4 — Higher order function untuk filter & sort
function urutkanBerdasarkanNilai(peserta, urutan = "desc") {
    return [...peserta].sort((a, b) => {
        const diff = a.getRataRata() - b.getRataRata();
        return urutan === "asc" ? diff : -diff;
    });
}
// langkah 5 — Implementasi
console.log("=== SISTEM PENGELOLAAN PESERTA MAGANG ===\n");
const linda = new PesertaMagang("Linda Angellina", "lindaangel505@gmail.com", "SMK 5 Malang", 1);
linda.tambahNilai(85);
linda.tambahNilai(90);
linda.tambahNilai(88);
const sukma = new PesertaMagang("Aura Sukma", "aura@mail.com", "SMK 2 Malang", 1);
sukma.tambahNilai(78);
sukma.tambahNilai(82);
sukma.tambahNilai(80);
const semuaPeserta = [linda, sukma];
const terurutDesc = urutkanBerdasarkanNilai(semuaPeserta, "desc");
console.log("--- Data Peserta Terurut (Nilai Tertinggi ke Terendah) ---");
terurutDesc.forEach((p) => {
    console.log(`${p.info()} - Rata-rata: ${p.getRataRata()}`);
});
const terurutAsc = urutkanBerdasarkanNilai(semuaPeserta, "asc");
console.log("\n--- Data Peserta Terurut (Nilai Terendah ke Tertinggi) ---");
terurutAsc.forEach((p) => {
    console.log(`${p.info()} - Rata-rata: ${p.getRataRata()}`);
});
const responseDesc = buatResponse(terurutDesc, "Data peserta berhasil dimuat (descending)");
const responseAsc = buatResponse(terurutAsc, "Data peserta berhasil dimuat (ascending)");
console.log("\n--- API Response (Descending) ---");
console.log("Success:", responseDesc.success);
console.log("Message:", responseDesc.message);
console.log("Data:");
responseDesc.data.forEach((p) => {
    console.log(`  - ${p.nama} (Rata-rata: ${p.getRataRata()})`);
});
console.log("\n--- API Response (Ascending) ---");
console.log("Success:", responseAsc.success);
console.log("Message:", responseAsc.message);
console.log("Data:");
responseAsc.data.forEach((p) => {
    console.log(`  - ${p.nama} (Rata-rata: ${p.getRataRata()})`);
});
const responseError = buatResponse(null, "Gagal memuat data peserta");
console.log("\n--- API Response (Error) ---");
console.log("Success:", responseError.success);
console.log("Message:", responseError.message);
console.log("Data:", responseError.data);
