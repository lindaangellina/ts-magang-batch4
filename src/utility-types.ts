export {};
// src/utility-types.ts

// INTERFACE DASAR

interface JurnalHarian {
    id: number;
    pesertaId: number;
    tanggal: string;
    kegiatan: string;
    hambatan: string;
    rencanaBesok: string;
    linkCommit: string;
    statusReview: "belum" | "sudah";
}

// SOAL 1 — Partial

type JurnalUpdate = Partial<JurnalHarian>;

function updateJurnal(id: number, data: JurnalUpdate): void {
    console.log(`[UPDATE] Jurnal ID ${id}:`, data);
}

console.log("SOAL 1: PARTIAL");
updateJurnal(1, { statusReview: "sudah" });

// SOAL 2 — Omit

type JurnalBaru = Omit<JurnalHarian, "id" | "statusReview">;

let nextId = 1;

function buatJurnal(data: JurnalBaru): JurnalHarian {
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

// SOAL 3 — Pick

type JurnalRingkas = Pick<JurnalHarian, "id" | "tanggal" | "kegiatan">;

function getRingkasan(jurnal: JurnalHarian): JurnalRingkas {
    return {
        id: jurnal.id,
        tanggal: jurnal.tanggal,
        kegiatan: jurnal.kegiatan,
    };
}

console.log("\nSOAL 3: PICK");
const jurnalLengkap: JurnalHarian = {
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

// SOAL 4 — Record

type Fase = "fase1" | "fase2" | "fase3" | "fase4" | "fase5";

const durasiFase: Record<Fase, number> = {
    fase1: 2,
    fase2: 2,
    fase3: 3,
    fase4: 1,
    fase5: 3
};

const namaFase: Record<Fase, string> = {
    fase1: "TypeScript fundamentals",
    fase2: "Backend development",
    fase3: "Proyek kolaboratif",
    fase4: "Frontend development",
    fase5: "Final project"
};

console.log("\nSOAL 4: RECORD");
console.log("Nama Fase:", namaFase);
console.log("Durasi Fase:", durasiFase);

// SOAL 5 — Kombinasi Partial + Omit

type JurnalAman = Partial<Omit<JurnalHarian, "id">>;

console.log("\n=== SOAL 5: KOMBINASI ===");
const jurnalku: JurnalAman = {
    pesertaId: 1,
    tanggal: "2026-08-19",
    kegiatan: "Belajar Utility Types",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://lindaangellina.github.io/",
    statusReview: "belum",
};
console.log("Jurnal Aman:", jurnalku);