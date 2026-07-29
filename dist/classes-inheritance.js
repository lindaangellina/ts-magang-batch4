"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/classes-inheritance.ts
// ============================================
// SOAL 1 — Class Dasar
// ============================================
class Mentor {
    constructor(nama, keahlian) {
        this.nama = nama;
        this.keahlian = keahlian;
    }
    tambahKeahlian(skill) {
        this.keahlian.push(skill);
    }
    getInfo() {
        return `${this.nama} - keahlian: ${this.keahlian.join(", ")}`;
    }
}
console.log("=== SOAL 1: MENTOR ===");
const mentorLinda = new Mentor("Linda Angellina", ["TypeScript", "JavaScript"]);
console.log(mentorLinda.getInfo());
mentorLinda.tambahKeahlian("React");
console.log(mentorLinda.getInfo());
// ============================================
// SOAL 2 — Access Modifiers
// ============================================
class Nilai {
    constructor(list = []) {
        this.list = list;
    }
    tambah(n) {
        this.list.push(n);
    }
    rataRata() {
        if (this.list.length === 0)
            return 0;
        const total = this.list.reduce((sum, n) => sum + n, 0);
        return total / this.list.length;
    }
    tertinggi() {
        if (this.list.length === 0)
            return 0;
        return Math.max(...this.list);
    }
}
console.log("\n=== SOAL 2: NILAI ===");
const nilaiLinda = new Nilai([85, 90, 78]);
nilaiLinda.tambah(95);
console.log(`Rata-rata: ${nilaiLinda.rataRata()}`);
console.log(`Nilai tertinggi: ${nilaiLinda.tertinggi()}`);
// ============================================
// SOAL 3 — Inheritance
// ============================================
class Kegiatan {
    constructor(nama, tanggal) {
        this.nama = nama;
        this.tanggal = tanggal;
    }
    deskripsi() {
        return `${this.nama} Pada ${this.tanggal}`;
    }
}
class JurnalHarian extends Kegiatan {
    constructor(nama, tanggal, hambatan) {
        super(nama, tanggal);
        this.hambatan = hambatan;
    }
    deskripsi() {
        return `${super.deskripsi()}\nHambatan: ${this.hambatan}`;
    }
}
class SprintTask extends Kegiatan {
    constructor(nama, tanggal, prioritas) {
        super(nama, tanggal);
        this.prioritas = prioritas;
    }
    deskripsi() {
        return `${super.deskripsi()}\nPrioritas: ${this.prioritas}`;
    }
}
console.log("\n=== SOAL 3: INHERITANCE ===");
const kegiatan1 = new Kegiatan("Belajar TypeScript", "2026-07-29");
console.log(kegiatan1.deskripsi());
const jurnalLinda = new JurnalHarian("Belajar Classes & Inheritance", "2026-07-29", "Masih membedakan public, private, protected");
console.log(jurnalLinda.deskripsi());
const sprintLinda = new SprintTask("Selesaikan latihan inheritance", "2026-07-29", "high");
console.log(sprintLinda.deskripsi());
