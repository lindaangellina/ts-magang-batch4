export {};
// src/generics-dasar.ts

// SOAL 1 — Generic Function

function getLast<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

console.log("=== SOAL 1: GET LAST ===");
console.log(getLast([1, 2, 3]));
console.log(getLast(["halo", "nama", "saya", "linda"]));

// SOAL 2 — Generic Function 2 Parameter

function kombinasi<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

console.log("\n SOAL 2: GABUNGKAN ");
const data1 = {
    nama: "Linda Angellina",
    kelas: "XII PPLG 2"
};
const data2 = {
    sekolah: "SMKN 5 Malang",
    lokasi: "Jl. Ikan Piranha"
};
console.log(kombinasi(data1, data2));

// SOAL 3 — Generic Interface

interface Wadah<T> {
    nilai: T;
    label: string;
}

interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    fase: number;
    nilaiAkhir: number;
    github: string;
    status: string;
}

const dataSuhu: Wadah<number> = {
    nilai: 35,
    label: "Suhu Ruangan (Celcius)",
};

const dataNamaBenda: Wadah<string> = {
    nilai: "Kotak Pensil",
    label: "Nama Benda"
};

const linda: Peserta = {
    id: 1,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 1,
    nilaiAkhir: 95,
    github: "https://github.com/lindaangellina",
    status: "aktif"
};

const dataPesertaMagang: Wadah<Peserta> = {
    nilai: linda,
    label: "Data Peserta Magang",
};

console.log("\n SOAL 3: GENERIC INTERFACE ");
console.log("Data Suhu:", dataSuhu);
console.log("Data Nama Benda:", dataNamaBenda);
console.log("Data Peserta Magang:", dataPesertaMagang);
console.log(`Nama peserta: ${dataPesertaMagang.nilai.nama}`);

// SOAL 4 — Generic Class

class Riwayat<T> {
    constructor(private data: T[] = []) {}

    get jumlah(): number {
        return this.data.length;
    }

    tambah(item: T): void {
        this.data.push(item);
        console.log(`[ADD] ${item} ditambahkan ke riwayat`);
    }

    getSemua(): T[] {
        return this.data;
    }

    getTerakhir(): T | undefined {
        return this.data[this.data.length - 1];
    }
}

console.log("\n SOAL 4: GENERIC CLASS ");

const logAktivitas = new Riwayat<string>();
logAktivitas.tambah("Check-in pukul 08:00");
logAktivitas.tambah("Belajar Generics");
logAktivitas.tambah("Mengerjakan latihan");
logAktivitas.tambah("Push ke GitHub");
console.log("Log aktivitas:", logAktivitas.getSemua());
console.log(`Total log: ${logAktivitas.jumlah}`);
console.log(`Log terakhir: ${logAktivitas.getTerakhir()}`);

const riwayatPeserta = new Riwayat<Peserta>();
riwayatPeserta.tambah(linda);
const budi: Peserta = {
    id: 2,
    nama: "Kenzie Yanuar",
    sekolah: "SMPN 18 Malang",
    fase: 1,
    nilaiAkhir: 90,
    github: "https://github.com/kenzieyanuar",
    status: "aktif"
};
riwayatPeserta.tambah(budi);
console.log("Semua peserta:", riwayatPeserta.getSemua());
console.log(`Total peserta: ${riwayatPeserta.jumlah}`);