"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PesertaDasar {
    constructor(nama, sekolah) {
        this.nama = nama;
        this.sekolah = sekolah;
        this._nilaiList = [];
        PesertaDasar.totalPeserta++;
        this.id = PesertaDasar.totalPeserta;
    }
    static getTotalPeserta() {
        return PesertaDasar.totalPeserta;
    }
    tambahNilai(nilai) {
        if (nilai < 0 || nilai > 100) {
            console.log("Nilai harus antara 0-100");
            return;
        }
        this._nilaiList.push(nilai);
    }
    get rataRata() {
        if (this._nilaiList.length === 0)
            return 0;
        return this._nilaiList.reduce((a, b) => a + b, 0) / this._nilaiList.length;
    }
    getGrade() {
        const nilai = this.hitungNilaiAkhir();
        if (nilai >= 90)
            return "A";
        if (nilai >= 75)
            return "B";
        if (nilai >= 60)
            return "C";
        return "D";
    }
}
PesertaDasar.totalPeserta = 0;
class PesertaSMK5 extends PesertaDasar {
    hitungNilaiAkhir() {
        return this.rataRata;
    }
    getFaseMaksimal() {
        return 3;
    }
}
class PesertaSMK6 extends PesertaDasar {
    constructor(nama, sekolah) {
        super(nama, sekolah);
        this.bobotProject = 0.3;
    }
    hitungNilaiAkhir() {
        return this.rataRata * (1 - this.bobotProject) + (this.rataRata * this.bobotProject * 1.1);
    }
    getFaseMaksimal() {
        return 5;
    }
}
console.log("SISTEM PENILAIAN PESERTA MAGANG \n");
const peserta = [
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
