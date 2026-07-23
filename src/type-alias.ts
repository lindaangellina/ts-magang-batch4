export {};
// SOAL 1
type FaseProgram = "fase 1" | "fase 2" | "fase 3" | "fase 4" | "fase 5";
type NilaiAspek = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // strict!

type HasilPenilaian = {
    kehadiran: NilaiAspek;
    materi: NilaiAspek;
    kode: NilaiAspek;
    problemSolving: NilaiAspek;
    komunikasi: NilaiAspek;
};

const penilaianLinda: HasilPenilaian = {
  kehadiran: 10,
  materi: 9,
  kode: 8,
  problemSolving: 9,
  komunikasi: 10,
};
const faseLinda: FaseProgram = "fase 2";

const penilaianZidan: HasilPenilaian = {
    kehadiran: 8,
    materi: 7,
    kode: 6,
    problemSolving: 7,
    komunikasi: 8,
};
const faseZidan: FaseProgram = "fase 5";

console.log("\n=== HASIL PENILAIAN ===");
console.log("Fase Linda:", faseLinda);
console.log("Penilaian Linda:", penilaianLinda);
console.log("Fase Zidan:", faseZidan);
console.log("Penilaian Zidan:", penilaianZidan);



// SOAL 2

interface Absensi {
    tanggal: string;
    checkIn: string;
    checkOut: string;
}

interface JurnalHarian extends Absensi {
    kegiatan: string;
    hambatan: string;
    rencanaBesok: string;
    linkCommit?: string;
}

const jurnal1: JurnalHarian = {
  tanggal: "23-07-2026",
  checkIn: "08:00",
  checkOut: "14:00",
  kegiatan: "Belajar Type Alias dan Interface",
  hambatan: "Masih memahami perbedaan interface dan type",
  rencanaBesok: "Mengerjakan challenge berikutnya",
  linkCommit: "https://github.com/lindaangellina/ts-magang-batch4/commit/81b518520200fc0c8e43147f589101a310adc904",
};

const jurnal2: JurnalHarian = {
  tanggal: "24-07-2026",
  checkIn: "08:05",
  checkOut: "14:00",
  kegiatan: "Belajar Extend Interface",
  hambatan: "Belum ada hambatan",
  rencanaBesok: "Belajar Generic",
};

console.log("\n=== JURNAL HARIAN ===");
console.log("\nJurnal 1:");
console.log(jurnal1);
console.log("\nJurnal 2:");
console.log(jurnal2);



// SOAL 3

type PesertaStatus = "aktif" | "lulus" | "berhenti";

interface Peserta {
    id: number;
    nama: string;
    kelas: string;
    status: PesertaStatus;
}

const pesertaList: Peserta[] = [
    {
        id: 1,
        nama: "Linda Angellina",
        kelas: "12 PPLG 2",
        status: "aktif",
    },
    {
        id: 2,
        nama: "Zidan Alfa",
        kelas: "12 PPLG 3",
        status: "lulus", 
    },
    {
        id: 3,
        nama: "Azzahra Cahya",
        kelas: "12 TKJ 2",
        status: "berhenti",
    },
    {
        id: 4,
        nama: "Aura Sukma Wulandari",
        kelas: "12 KKR 2",
        status: "aktif",
    },
];

function filterPeserta(list: Peserta[], status: PesertaStatus): Peserta[] {
  return list.filter((peserta) => peserta.status === status);
}

console.log("\n=== STATUS PESERTA ===");
console.log("Peserta Aktif:");
console.log(filterPeserta(pesertaList, "aktif"));

console.log("\nPeserta Lulus:");
console.log(filterPeserta(pesertaList, "lulus"));

console.log("\nPeserta Berhenti:");
console.log(filterPeserta(pesertaList, "berhenti"));