"use strict";
// src/tipe-dasar.ts
// ─── 1. TIPE PRIMITIF ────────────────────────────────────────────
let namaLengkap = "Nama Lengkap";
let usia = 30;
let aktif = true;
// Type inference — TypeScript bisa tebak sendiri
let kota = "Malang"; // TypeScript tahu ini string
let nilai = 95.5; // TypeScript tahu ini number
// Coba uncomment baris di bawah dan lihat error-nya:
// kota = 100;   // Error: Type 'number' is not assignable to type 'string'
// ─── 2. ANY vs UNKNOWN ───────────────────────────────────────────
let dataAny = "hello";
dataAny = 42; // OK — any mematikan semua pengecekan
dataAny = true; // OK — tapi berbahaya!
let dataUnknown = "test";
// dataUnknown.toUpperCase(); // Error! Harus cek tipe dulu
if (typeof dataUnknown === "string") {
    console.log(dataUnknown.toUpperCase()); // OK — sudah dicek
}
// ─── 3. ARRAY ────────────────────────────────────────────────────
let nilaiUjian = [85, 92, 78, 90, 88];
let namaKelas = ["Alice", "Bob", "Charlie"];
// Array methods — TypeScript tahu tipenya
const nilaiTertinggi = Math.max(...nilaiUjian); // number
const semualulus = nilaiUjian.every(n => n >= 75); // boolean
const nilaiGanda = nilaiUjian.map(n => n * 2); // number[]
console.log("Nilai tertinggi:", nilaiTertinggi);
console.log("Semua lulus?", semualulus);
// ─── 4. ENUM ─────────────────────────────────────────────────────
// String enum — lebih disarankan karena nilainya jelas saat di-debug
var StatusMagang;
(function (StatusMagang) {
    StatusMagang["Aktif"] = "AKTIF";
    StatusMagang["Selesai"] = "SELESAI";
    StatusMagang["Berhenti"] = "BERHENTI";
})(StatusMagang || (StatusMagang = {}));
let statusBudi = StatusMagang.Aktif;
console.log("Status Budi:", statusBudi); // "AKTIF"
function cekStatus(status) {
    if (status === StatusMagang.Aktif)
        return "Sedang berjalan";
    if (status === StatusMagang.Selesai)
        return "Sudah selesai";
    return "Berhenti di tengah jalan";
}
console.log(cekStatus(StatusMagang.Selesai));
let userId = "USR-001";
userId = 42; // OK — karena ID bisa string atau number
function formatID(id) {
    if (typeof id === "string") {
        return id.toUpperCase(); // TypeScript tahu id adalah string di sini
    }
    return `ID-${id}`; // TypeScript tahu id adalah number di sini
}
console.log(formatID("usr-001")); // "USR-001"
console.log(formatID(42)); // "ID-42"
