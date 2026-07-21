// src/perkenalan.ts
// Isi dengan data diri sendiri — jangan copy milik teman

const namaSaya: string = "Linda Angellina"; // ← isi nama kamu
const asalSekolah: string = "SMK 5 Malang"; // ← SMK 5 Malang atau SMK 6 Malang
// const kota: string = "Malang";
const sudahBelajarJavaScript: boolean = true; // atau false
const targetSelesaiMagang: number = 2026; // tahun target

// Buat fungsi perkenalan
function perkenalan(
  nama: string,
  sekolah: string,
  sudahJS: boolean
): string {
  const statusJS = sudahJS ? "sudah" : "belum";
  return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}

console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));