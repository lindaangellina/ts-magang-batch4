"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/static-members.ts
// ============================================
// SOAL 1 — Static Counter
// ============================================
class SprintTask {
    constructor(nama) {
        this.nama = nama;
        SprintTask.totalTask++;
        this.id = SprintTask.totalTask;
    }
    static getTotalTask() {
        return SprintTask.totalTask;
    }
}
SprintTask.totalTask = 0;
console.log("=== SOAL 1: SPRINT TASK ===");
const task1 = new SprintTask("Setup TypeScript");
const task2 = new SprintTask("Belajar Interface");
const task3 = new SprintTask("Belajar Class");
const task4 = new SprintTask("Belajar Static");
const task5 = new SprintTask("Latihan Integrasi");
console.log(`Total task: ${SprintTask.getTotalTask()}`);
console.log(`Task 1: ${task1.nama} (ID: ${task1.id})`);
console.log(`Task 5: ${task5.nama} (ID: ${task5.id})`);
// ============================================
// SOAL 2 — Static Readonly Config
// ============================================
class AppConfig {
    static getInfo() {
        return `AppName: ${this.APP_NAME}\nVersion: ${this.VERSION}\nMaxPeserta: ${this.MAX_PESERTA}`;
    }
}
AppConfig.APP_NAME = "SiTrack";
AppConfig.VERSION = "1.0.0";
AppConfig.MAX_PESERTA = 4;
console.log("\n=== SOAL 2: APP CONFIG ===");
console.log(AppConfig.getInfo());
// ============================================
// SOAL 3 — Static Factory
// ============================================
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }
    static buat(nilai) {
        if (nilai < 0 || nilai > 100) {
            return null;
        }
        return new Nilai(nilai);
    }
    getNilai() {
        return this.nilai;
    }
}
console.log("\n=== SOAL 3: STATIC FACTORY ===");
const nilai1 = Nilai.buat(10);
const nilai2 = Nilai.buat(0);
const nilai3 = Nilai.buat(105);
const nilai4 = Nilai.buat(85);
console.log(`Nilai 1: ${nilai1?.getNilai() ?? "Tidak valid"}`);
console.log(`Nilai 2: ${nilai2?.getNilai() ?? "Tidak valid"}`);
console.log(`Nilai 3: ${nilai3?.getNilai() ?? "Tidak valid"}`);
console.log(`Nilai 4: ${nilai4?.getNilai() ?? "Tidak valid"}`);
// ============================================
// SOAL 4 — Static Utility
// ============================================
class StringHelper {
    static capitalize(str) {
        if (str.length === 0)
            return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    static slugify(str) {
        return str
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
    }
    static truncate(str, maxLength) {
        if (str.length <= maxLength)
            return str;
        return str.slice(0, maxLength) + "...";
    }
}
console.log("\n=== SOAL 4: STRING HELPER ===");
console.log(`capitalize("hai saya linda"): ${StringHelper.capitalize("hai saya linda")}`);
console.log(`slugify("hari ini sedang belajar static"): ${StringHelper.slugify("hari ini sedang belajar static")}`);
console.log(`truncate("saya jurusan pplg", 10): ${StringHelper.truncate("saya jurusan pplg", 10)}`);
