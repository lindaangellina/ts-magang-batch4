export {};
// src/integrasi-minggu4.ts

// STUDI KASUS: Sistem Penilaian Peserta Magang (versi OOP lengkap)

interface DapatDinilai {
    hitungNilaiAkhir(): number;
    getGrade(): string;
}

abstract class PesertaDasar implements DapatDinilai {
    private static totalPeserta: number = 0;
    protected _nilaiList: number[] = [];
    public readonly id: number;

    constructor(
        public nama: string,
        public sekolah: string
    ) {
        PesertaDasar.totalPeserta++;
        this.id = PesertaDasar.totalPeserta;
    }

    static getTotalPeserta(): number {
        return PesertaDasar.totalPeserta;
    }

    tambahNilai(nilai: number): void {
        if (nilai < 0 || nilai > 100) {
            console.log("Nilai harus antara 0-100");
            return;
        }
        this._nilaiList.push(nilai);
    }

    get rataRata(): number {
        if (this._nilaiList.length === 0) return 0;
        return this._nilaiList.reduce((a, b) => a + b, 0) / this._nilaiList.length;
    }

    abstract hitungNilaiAkhir(): number;

    getGrade(): string {
        const nilai = this.hitungNilaiAkhir();
        if (nilai >= 90) return "A";
        if (nilai >= 75) return "B";
        if (nilai >= 60) return "C";
        return "D";
    }

    abstract getFaseMaksimal(): number;
}

class PesertaSMK5 extends PesertaDasar {
    hitungNilaiAkhir(): number {
        return this.rataRata;
    }

    getFaseMaksimal(): number {
        return 3;
    }
}

class PesertaSMK6 extends PesertaDasar {
    private bobotProject: number = 0.3;

    constructor(nama: string, sekolah: string) {
        super(nama, sekolah);
    }

    hitungNilaiAkhir(): number {
        return this.rataRata * (1 - this.bobotProject) + (this.rataRata * this.bobotProject * 1.1);
    }

    getFaseMaksimal(): number {
        return 5;
    }
}

console.log("SISTEM PENILAIAN PESERTA MAGANG \n");

const peserta: PesertaDasar[] = [
    new PesertaSMK5("Linda Angellina", "SMK 5 Malang"),
    new PesertaSMK5("Zidan Alfa", "SMK 5 Malang"),
    new PesertaSMK6("Aura Sukma Wulandari", "SMK 2 Malang"),
    new PesertaSMK6("Saidatul Kholidiya", "SMK 6 Malang"),
    new PesertaSMK5("Ajeng Neilza", "SMK 6 Malang"),
];

peserta[0]?.tambahNilai(88);
peserta[0]?.tambahNilai(90);

peserta[1]?.tambahNilai(92);
peserta[1]?.tambahNilai(89);

peserta[2]?.tambahNilai(85);
peserta[2]?.tambahNilai(82);

peserta[3]?.tambahNilai(78);
peserta[3]?.tambahNilai(88);

peserta[4]?.tambahNilai(90);
peserta[4]?.tambahNilai(87);

console.log("Hasil Penilaian");
peserta.forEach((p) => {
    console.log(`${p.nama} (${p.sekolah})`);
    console.log(`  ID: ${p.id}`);
    console.log(`  Fase Maksimal: ${p.getFaseMaksimal()}`);
    console.log(`  Nilai Akhir: ${p.hitungNilaiAkhir().toFixed(2)}`);
    console.log(`  Grade: ${p.getGrade()}`);
    console.log(`  Rata-rata: ${p.rataRata.toFixed(2)}`);
    console.log("---");
});

console.log(`Total peserta terdaftar: ${PesertaDasar.getTotalPeserta()}`);