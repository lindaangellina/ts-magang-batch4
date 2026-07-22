// src/interfaces-dasar.ts

// SOAL 1
interface Peserta {
  readonly id: number;
  nama: string;
  sekolah: string;
  fase: number;
  nilaiAkhir?: number;
  github?: string;
}

const peserta1: Peserta = {
  id: 1,
  nama: "Linda Angellina",
  sekolah: "SMK 5 Malang",
  fase: 1,
  nilaiAkhir: 95,
  github: "lindaangellina"
};

const peserta2: Peserta = {
  id: 2,
  nama: "Ajeng Neilza ",
  sekolah: "SMK 6 Malang",
  fase: 1
};

console.log("=== SOAL 1: DATA PESERTA ===");
console.log(peserta1);
console.log(peserta2);


// SOAL 2
interface Mentor {
  nama: string;
  readonly email: string;
  keahlian: string[];
  review(peserta: Peserta, catatan: string): string;
}

const mentor1: Mentor = {
  nama: "Pak Fajar Ariadi",
  email: "fajar@nawasena.com",
  keahlian: ["TypeScript", "React", "Node.js"],
  review(peserta: Peserta, catatan: string): string {
    return `Feedback untuk ${peserta.nama}: ${catatan}`;
  }
};

console.log("\n=== SOAL 2: DATA MENTOR ===");
console.log(`Nama Mentor: ${mentor1.nama}`);
console.log(`Keahlian: ${mentor1.keahlian.join(", ")}`);
console.log(mentor1.review(peserta1, "Semangat terus belajarnya!"));


// SOAL 3
interface Kelas {
  nama: string;
  peserta: Peserta[];
  mentor: Mentor;
  tambahPeserta(p: Peserta): void;
  cariPeserta(nama: string): Peserta | undefined;
}

const kelasMagang: Kelas = {
  nama: "Magang Batch 4 - TypeScript",
  peserta: [peserta1, peserta2],
  mentor: mentor1,
  tambahPeserta(p: Peserta): void {
    this.peserta.push(p);
    console.log(`SUKSES: ${p.nama} berhasil ditambahkan ke kelas.`);
  },
  cariPeserta(nama: string): Peserta | undefined {
    return this.peserta.find(p => p.nama === nama);
  }
};

console.log("\n=== SOAL 3: DATA KELAS ===");
console.log(`Nama Kelas: ${kelasMagang.nama}`);
console.log(`Mentor: ${kelasMagang.mentor.nama}`);
console.log(`Jumlah Peserta: ${kelasMagang.peserta.length}`);

const peserta3: Peserta = {
  id: 3,
  nama: "Saidatul Kholidiya",
  sekolah: "SMK 6 Malang",
  fase: 1,
  nilaiAkhir: 90
};
kelasMagang.tambahPeserta(peserta3);
console.log(`Jumlah Peserta setelah tambah: ${kelasMagang.peserta.length}`);

const cari = kelasMagang.cariPeserta("Linda Angellina");
console.log(`Hasil cari "Linda Angellina":`, cari ? "Ditemukan" : "Tidak ditemukan");

const cari2 = kelasMagang.cariPeserta("Saidatul Kholidiya");
console.log(`Hasil cari "Saidatul Kholidiya":`, cari2 ? "Ditemukan" : "Tidak ditemukan");