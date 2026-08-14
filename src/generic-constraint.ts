export {};
// src/generic-constraint.ts

// SOAL 1 — Constraint dengan harga

function hitungTotal<T extends { harga: number }>(items: T[]): number {
    return items.reduce((total, item) => total + item.harga, 0);
}

console.log("SOAL 1: HITUNG TOTAL");
console.log(hitungTotal([
    { barang: 'cermin kecil', harga:2000 },
    { barang: 'kipas', harga: 8000 },
    { barang: 'pulpen', harga: 3000 }
]));

// SOAL 2 — Constraint dengan Tanggal

interface PunyaTanggal {
    tanggal: string;
}

function urutkanBerdasarkanTanggal<T extends PunyaTanggal>(items: T[]): T[] {
    return [...items].sort((a, b) => Date.parse(a.tanggal) - Date.parse(b.tanggal));
}

interface Tugas extends PunyaTanggal {
    nama: string;
}

const tugas1: Tugas = {
    tanggal: "2026-11-01",
    nama: "Membuat Web Bakery"
};
const tugas2: Tugas = {
    tanggal: "2026-11-02",
    nama: "Membuat Web Perpustkaan"
};
const tugas3: Tugas = {
    tanggal: "2026-11-03",
    nama: "Membuat Web Bank"
};

const allTugas = [tugas1, tugas2, tugas3];

console.log("\nSOAL 2: URUTKAN TANGGAL");
console.log(urutkanBerdasarkanTanggal(allTugas));

// SOAL 3 — keyof Constraint

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return { ...obj, [key]: value };
}

console.log("\nSOAL 3: UPDATE PROPERTY");
const dataPeserta = { name: "Linda Angellina", age: 17 };
console.log("Data awal:", dataPeserta);
console.log("Setelah update age:", updateProperty(dataPeserta, "age", 18));

// SOAL 4 — Konteks Magang

interface DapatDiverifikasi {
    verifikasi(): boolean;
}

function prosesJikaValid<T extends DapatDiverifikasi>(item: T, aksi: (item: T) => void): void {
    if (!item.verifikasi()) {
        console.log("Gagal verifikasi, kemungkinan error terjadi");
        return;
    }
    aksi(item);
}

class SprintTask implements DapatDiverifikasi {
    constructor(private nama: string) {}

    verifikasi(): boolean {
        return this.nama.length > 0;
    }

    getNama(): string {
        return this.nama;
    }
}

console.log("\nSOAL 4: PROSES JIKA VALID");
const task = new SprintTask("Laravel Website");
prosesJikaValid(task, (t) => {
    console.log(`Data berhasil diverifikasi: ${t.verifikasi()}`);
});