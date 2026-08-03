export {};
// src/abstract-class.ts

// ============================================
// SOAL 1 — Notifikasi
// ============================================

abstract class Notifikasi {
    constructor(protected pesan: string) {}

    abstract kirim(): string;

    log(): void {
        console.log("[LOG] Notifikasi dikirim");
    }
}

class NotifikasiEmail extends Notifikasi {
    kirim(): string {
        return `Email terkirim: ${this.pesan}`;
    }
}

class NotifikasiWhatsapp extends Notifikasi {
    kirim(): string {
        return `WhatsApp terkirim: ${this.pesan}`;
    }
}

class NotifikasiPush extends Notifikasi {
    kirim(): string {
        return `Push notifikasi terkirim: ${this.pesan}`;
    }
}

console.log("=== SOAL 1: NOTIFIKASI ===");
const wa = new NotifikasiWhatsapp("hai ini linda");
console.log(wa.kirim());
wa.log();

const email = new NotifikasiEmail("hai ini azzahra");
console.log(email.kirim());

const push = new NotifikasiPush("hai ini kenzie");
console.log(push.kirim());


// ============================================
// SOAL 2 — Bentuk Geometri
// ============================================

abstract class BentukGeometri {
    abstract hitungLuas(): number;
    abstract hitungKeliling(): number;

    deskripsi(): string {
        return `Luas: ${this.hitungLuas()}, Keliling: ${this.hitungKeliling()}`;
    }
}

class Lingkaran extends BentukGeometri {
    constructor(private jariJari: number) {
        super();
    }

    hitungLuas(): number {
        return Math.PI * (this.jariJari ** 2);
    }

    hitungKeliling(): number {
        return 2 * Math.PI * this.jariJari;
    }
}

class Persegi extends BentukGeometri {
    constructor(private sisi: number) {
        super();
    }

    hitungLuas(): number {
        return this.sisi * this.sisi;
    }

    hitungKeliling(): number {
        return 4 * this.sisi;
    }
}

class Segitiga extends BentukGeometri {
    constructor(
        private alas: number,
        private tinggi: number,
        private sisi1: number,
        private sisi2: number,
        private sisi3: number
    ) {
        super();
    }

    hitungLuas(): number {
        return 0.5 * this.alas * this.tinggi;
    }

    hitungKeliling(): number {
        return this.sisi1 + this.sisi2 + this.sisi3;
    }
}

console.log("\n=== SOAL 2: BENTUK GEOMETRI ===");
const lingkaran = new Lingkaran(5);
console.log(`Lingkaran (r=5): ${lingkaran.deskripsi()}`);

const persegi = new Persegi(10);
console.log(`Persegi (s=10): ${persegi.deskripsi()}`);

const segitiga = new Segitiga(10, 5, 6, 7, 10);
console.log(`Segitiga: ${segitiga.deskripsi()}`);


// ============================================
// SOAL 3 — Tugas Magang
// ============================================

abstract class TugasMagang {
    constructor(
        protected judul: string,
        protected deadline: string
    ) {}

    abstract statusPengerjaan(): string;

    info(): string {
        return `Judul: ${this.judul}, Deadline: ${this.deadline}`;
    }
}

class TugasHarian extends TugasMagang {
    statusPengerjaan(): string {
        const dateDeadline = Date.parse(this.deadline);
        if (isNaN(dateDeadline)) {
            return "Format deadline tidak valid (YYYY-MM-DD)";
        }
        const diffDays = (Date.now() - dateDeadline) / (1000 * 60 * 60 * 24);
        if (diffDays > 1) {
            return `Tugas Harian "${this.judul}" terlambat ${Math.floor(diffDays)} hari`;
        } else if (diffDays > 0) {
            return `Tugas Harian "${this.judul}" hampir terlambat`;
        } else {
            return `Tugas Harian "${this.judul}" tepat waktu`;
        }
    }
}

class TugasMingguan extends TugasMagang {
    statusPengerjaan(): string {
        const dateDeadline = Date.parse(this.deadline);
        if (isNaN(dateDeadline)) {
            return "Format deadline tidak valid (YYYY-MM-DD)";
        }
        const diffWeeks = (Date.now() - dateDeadline) / (1000 * 60 * 60 * 24 * 7);
        if (diffWeeks > 1) {
            return `Tugas Mingguan "${this.judul}" terlambat ${Math.floor(diffWeeks)} minggu`;
        } else if (diffWeeks > 0) {
            return `Tugas Mingguan "${this.judul}" hampir terlambat`;
        } else {
            return `Tugas Mingguan "${this.judul}" tepat waktu`;
        }
    }
}

console.log("\n=== SOAL 3: TUGAS MAGANG ===");

const tugasHarian1 = new TugasHarian("Mengerjakan latihan TypeScript", "2026-08-02");
console.log(tugasHarian1.statusPengerjaan());

const tugasHarian2 = new TugasHarian("Push ke GitHub", "2026-08-01");
console.log(tugasHarian2.statusPengerjaan());

const tugasHarian3 = new TugasHarian("Isi jurnal magang", "2026-07-28");
console.log(tugasHarian3.statusPengerjaan());