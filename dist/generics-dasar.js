"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/generics-dasar.ts
// SOAL 1 — Generic Function
function getLast(arr) {
    return arr[arr.length - 1];
}
console.log("=== SOAL 1: GET LAST ===");
console.log(getLast([1, 2, 3]));
console.log(getLast(["halo", "nama", "saya", "linda"]));
// SOAL 2 — Generic Function 2 Parameter
function kombinasi(a, b) {
    return { ...a, ...b };
}
console.log("\n SOAL 2: GABUNGKAN ");
const data1 = {
    nama: "Linda Angellina",
    kelas: "XII PPLG 2"
};
const data2 = {
    sekolah: "SMKN 5 Malang",
    lokasi: "Jl. Ikan Piranha"
};
console.log(kombinasi(data1, data2));
const dataSuhu = {
    nilai: 35,
    label: "Suhu Ruangan (Celcius)",
};
const dataNamaBenda = {
    nilai: "Kotak Pensil",
    label: "Nama Benda"
};
const linda = {
    id: 1,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 1,
    nilaiAkhir: 95,
    github: "https://github.com/lindaangellina",
    status: "aktif"
};
const dataPesertaMagang = {
    nilai: linda,
    label: "Data Peserta Magang",
};
console.log("\n SOAL 3: GENERIC INTERFACE ");
console.log("Data Suhu:", dataSuhu);
console.log("Data Nama Benda:", dataNamaBenda);
console.log("Data Peserta Magang:", dataPesertaMagang);
console.log(`Nama peserta: ${dataPesertaMagang.nilai.nama}`);
// SOAL 4 — Generic Class
class Riwayat {
    constructor(data = []) {
        this.data = data;
    }
    get jumlah() {
        return this.data.length;
    }
    tambah(item) {
        this.data.push(item);
        console.log(`[ADD] ${item} ditambahkan ke riwayat`);
    }
    getSemua() {
        return this.data;
    }
    getTerakhir() {
        return this.data[this.data.length - 1];
    }
}
console.log("\n SOAL 4: GENERIC CLASS ");
const logAktivitas = new Riwayat();
logAktivitas.tambah("Check-in pukul 08:00");
logAktivitas.tambah("Belajar Generics");
logAktivitas.tambah("Mengerjakan latihan");
logAktivitas.tambah("Push ke GitHub");
console.log("Log aktivitas:", logAktivitas.getSemua());
console.log(`Total log: ${logAktivitas.jumlah}`);
console.log(`Log terakhir: ${logAktivitas.getTerakhir()}`);
const riwayatPeserta = new Riwayat();
riwayatPeserta.tambah(linda);
const budi = {
    id: 2,
    nama: "Kenzie Yanuar",
    sekolah: "SMPN 18 Malang",
    fase: 1,
    nilaiAkhir: 90,
    github: "https://github.com/kenzieyanuar",
    status: "aktif"
};
riwayatPeserta.tambah(budi);
console.log("Semua peserta:", riwayatPeserta.getSemua());
console.log(`Total peserta: ${riwayatPeserta.jumlah}`);
