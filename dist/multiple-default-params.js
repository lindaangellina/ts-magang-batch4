"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/multiple-default-params.ts
// SOAL 1 — Multiple Type Parameters
function konversiData(data, transform) {
    return data.map(transform);
}
console.log("SOAL 1: KONVERSI DATA");
const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = konversiData(angka, (num) => `ID: ${num}`);
console.log("Hasil konversi:", str);
const dataSekolah = [
    { sekolah: 'SMKN 5 Malang' },
    { sekolah: 'SMKN 6 Malang' },
];
const alphabet = konversiData(dataSekolah, (item) => item.sekolah);
console.log("Nama sekolah:", alphabet);
// SOAL 2 — Generic Class dengan 2 Type Parameter
class PasanganKunci {
    constructor() {
        this.items = [];
    }
    tambah(kunci, nilai) {
        this.items.push({ kunci, nilai });
        console.log(`[ADD] Kunci: ${kunci}, Nilai: ${nilai}`);
    }
    cari(kunci) {
        const data = this.items.find((item) => item.kunci === kunci);
        return data ? data.nilai : undefined;
    }
    getSemuaKunci() {
        return this.items.map((item) => item.kunci);
    }
}
console.log("\nSOAL 2: PASANGAN KUNCI");
const pasangan = new PasanganKunci();
console.log("Kunci awal:", pasangan.getSemuaKunci());
pasangan.tambah("nilai", "5");
console.log("Kunci setelah tambah:", pasangan.getSemuaKunci());
console.log("Cari 'nilai':", pasangan.cari("nilai"));
const siswa1 = {
    id: 0,
    nama: "Linda Angellina",
    nilai: 100,
    sekolah: "SMKN 5 Malang"
};
const siswa2 = {
    id: 1,
    nama: "Aura Sukma",
    nilai: 90,
    sekolah: "SMKN 5 Malang"
};
const allPeserta = [siswa1, siswa2];
console.log("\nSOAL 3: API RESULT");
const success = {
    status: 200,
    result: { message: 'Success' }
};
const failure = {
    status: 400,
    result: allPeserta
};
console.log("Success:", success);
console.log("Failure:", failure);
console.log("\nSOAL 4: LIST RESPONSE");
const respon1 = {
    items: [{ id: 1, nama: "cell" }],
    total: 1000
};
const respon2 = {
    items: allPeserta,
    total: 2
};
console.log("Respon Default:", respon1);
console.log("Respon Peserta:", respon2);
