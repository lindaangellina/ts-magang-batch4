"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateJurnal(id, data) {
    console.log(`[UPDATE] Jurnal ID ${id}:`, data);
}
console.log("SOAL 1: PARTIAL");
updateJurnal(1, { statusReview: "sudah" });
let nextId = 1;
function buatJurnal(data) {
    return {
        id: nextId++,
        ...data,
        statusReview: "belum"
    };
}
console.log("\nSOAL 2: OMIT");
const jurnalBaru = buatJurnal({
    pesertaId: 1,
    tanggal: "2026-08-19",
    kegiatan: "Belajar utility types",
    hambatan: "Membedakan pick dan omit",
    rencanaBesok: "Belajar generic repository",
    linkCommit: "https://lindaangellina.github.io/"
});
console.log("Jurnal baru:", jurnalBaru);
function getRingkasan(jurnal) {
    return {
        id: jurnal.id,
        tanggal: jurnal.tanggal,
        kegiatan: jurnal.kegiatan,
    };
}
console.log("\nSOAL 3: PICK");
const jurnalLengkap = {
    id: 1,
    pesertaId: 1,
    tanggal: "2026-08-18",
    kegiatan: "Membuat project laravel",
    hambatan: "Tidak ada",
    rencanaBesok: "Tidak ada",
    linkCommit: "https://lindaangellina.github.io/",
    statusReview: "belum",
};
console.log("Ringkasan:", getRingkasan(jurnalLengkap));
const durasiFase = {
    fase1: 2,
    fase2: 2,
    fase3: 3,
    fase4: 1,
    fase5: 3
};
const namaFase = {
    fase1: "TypeScript fundamentals",
    fase2: "Backend development",
    fase3: "Proyek kolaboratif",
    fase4: "Frontend development",
    fase5: "Final project"
};
console.log("\nSOAL 4: RECORD");
console.log("Nama Fase:", namaFase);
console.log("Durasi Fase:", durasiFase);
console.log("\n=== SOAL 5: KOMBINASI ===");
const jurnalku = {
    pesertaId: 1,
    tanggal: "2026-08-19",
    kegiatan: "Belajar Utility Types",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://lindaangellina.github.io/",
    statusReview: "belum",
};
console.log("Jurnal Aman:", jurnalku);
