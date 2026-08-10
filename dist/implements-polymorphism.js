"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TugasHarian {
    constructor(judul, nilai, deadline) {
        this.judul = judul;
        this.nilai = nilai;
        this.deadline = deadline;
    }
    hitungNilai() {
        return this.nilai;
    }
    buatLaporan() {
        return `Tugas: ${this.judul}\nNilai: ${this.nilai}\nDeadline: ${this.deadline}`;
    }
}
console.log("SOAL 1: IMPLEMENTS MULTIPLE INTERFACE");
const tugas = new TugasHarian("Belajar TypeScript", 85, "2026-08-12");
console.log(`Nilai: ${tugas.hitungNilai()}`);
console.log(tugas.buatLaporan());
class NotifikasiDasar {
    constructor(pesan) {
        this.pesan = pesan;
    }
    isValid() {
        return this.pesan.length > 0 && this.pesan.length <= 500;
    }
}
class NotifikasiUrgent extends NotifikasiDasar {
    kirim() {
        return `[URGENT] ${this.pesan.toUpperCase()}`;
    }
}
class NotifikasiBiasa extends NotifikasiDasar {
    kirim() {
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
class Laporan {
}
class LaporanHarian extends Laporan {
    constructor(tanggal, aktivitas) {
        super();
        this.tanggal = tanggal;
        this.aktivitas = aktivitas;
    }
    generate() {
        return `LAPORAN HARIAN\nTanggal: ${this.tanggal}\nAktivitas: ${this.aktivitas}\nStatus: Selesai`;
    }
}
class LaporanMingguan extends Laporan {
    constructor(minggu, totalTugas, selesai) {
        super();
        this.minggu = minggu;
        this.totalTugas = totalTugas;
        this.selesai = selesai;
    }
    generate() {
        return `LAPORAN MINGGUAN\nMinggu ke-${this.minggu}\nTotal Tugas: ${this.totalTugas}\nSelesai: ${this.selesai}\nProgress: ${(this.selesai / this.totalTugas * 100).toFixed(0)}%`;
    }
}
class LaporanBulanan extends Laporan {
    constructor(bulan, totalPeserta, rataNilai) {
        super();
        this.bulan = bulan;
        this.totalPeserta = totalPeserta;
        this.rataNilai = rataNilai;
    }
    generate() {
        return `LAPORAN BULANAN\nBulan: ${this.bulan}\nTotal Peserta: ${this.totalPeserta}\nRata-rata Nilai: ${this.rataNilai}\nKesimpulan: ${this.rataNilai >= 75 ? "Baik" : "Perlu Ditingkatkan"}`;
    }
}
console.log("\n SOAL 3: POLYMORPHISM");
const laporanList = [
    new LaporanHarian("2026-08-10", "Belajar TypeScript, Getter Setter, Interface"),
    new LaporanMingguan(3, 15, 12),
    new LaporanBulanan("Agustus", 25, 82.5)
];
laporanList.forEach((laporan, index) => {
    console.log(`\n--- Laporan ${index + 1} ---`);
    console.log(laporan.generate());
});
