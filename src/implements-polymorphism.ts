export {};
// src/implements-polymorphism.ts

// SOAL 1 — Implements Multiple Interface

interface BisaDinilai {
    hitungNilai(): number;
}

interface BisaDilaporkan {
    buatLaporan(): string;
}

class TugasHarian implements BisaDinilai, BisaDilaporkan {
    constructor(
        private judul: string,
        private nilai: number,
        private deadline: string
    ) {}

    hitungNilai(): number {
        return this.nilai;
    }

    buatLaporan(): string {
        return `Tugas: ${this.judul}\nNilai: ${this.nilai}\nDeadline: ${this.deadline}`;
    }
}

console.log("SOAL 1: IMPLEMENTS MULTIPLE INTERFACE");
const tugas = new TugasHarian("Belajar TypeScript", 85, "2026-08-12");
console.log(`Nilai: ${tugas.hitungNilai()}`);
console.log(tugas.buatLaporan());


// SOAL 2 — Abstract Class + Implements Interface

interface DapatDiverifikasi {
    isValid(): boolean;
}

abstract class NotifikasiDasar implements DapatDiverifikasi {
    constructor(protected pesan: string) {}

    abstract kirim(): string;

    isValid(): boolean {
        return this.pesan.length > 0 && this.pesan.length <= 500;
    }
}

class NotifikasiUrgent extends NotifikasiDasar {
    kirim(): string {
        return `[URGENT] ${this.pesan.toUpperCase()}`;
    }
}

class NotifikasiBiasa extends NotifikasiDasar {
    kirim(): string {
        return `[BIASA] ${this.pesan}`;
    }
}

console.log("\n SOAL 2: ABSTRACT + IMPLEMENTS");
const urgent = new NotifikasiUrgent("Server down! Segera perbaiki!");
const biasa = new NotifikasiBiasa("Maintenance malam ini");

console.log(`Urgent - Valid: ${urgent.isValid()}`);
console.log(urgent.kirim());
console.log(`Biasa - Valid: ${biasa.isValid()}`);
console.log(biasa.kirim());

// SOAL 3 — Polymorphism

abstract class Laporan {
    abstract generate(): string;
}

class LaporanHarian extends Laporan {
    constructor(
        private tanggal: string,
        private aktivitas: string
    ) {
        super();
    }

    generate(): string {
        return `LAPORAN HARIAN\nTanggal: ${this.tanggal}\nAktivitas: ${this.aktivitas}\nStatus: Selesai`;
    }
}

class LaporanMingguan extends Laporan {
    constructor(
        private minggu: number,
        private totalTugas: number,
        private selesai: number
    ) {
        super();
    }

    generate(): string {
        return `LAPORAN MINGGUAN\nMinggu ke-${this.minggu}\nTotal Tugas: ${this.totalTugas}\nSelesai: ${this.selesai}\nProgress: ${(this.selesai/this.totalTugas*100).toFixed(0)}%`;
    }
}

class LaporanBulanan extends Laporan {
    constructor(
        private bulan: string,
        private totalPeserta: number,
        private rataNilai: number
    ) {
        super();
    }

    generate(): string {
        return `LAPORAN BULANAN\nBulan: ${this.bulan}\nTotal Peserta: ${this.totalPeserta}\nRata-rata Nilai: ${this.rataNilai}\nKesimpulan: ${this.rataNilai >= 75 ? "Baik" : "Perlu Ditingkatkan"}`;
    }
}

console.log("\n SOAL 3: POLYMORPHISM");
const laporanList: Laporan[] = [
    new LaporanHarian("2026-08-10", "Belajar TypeScript, Getter Setter, Interface"),
    new LaporanMingguan(3, 15, 12),
    new LaporanBulanan("Agustus", 25, 82.5)
];

laporanList.forEach((laporan, index) => {
    console.log(`\n--- Laporan ${index + 1} ---`);
    console.log(laporan.generate());
});