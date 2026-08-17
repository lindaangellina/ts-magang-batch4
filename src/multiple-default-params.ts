export {};
// src/multiple-default-params.ts

// SOAL 1 — Multiple Type Parameters

function konversiData<T, U>(data: T[], transform: (item: T) => U): U[] {
    return data.map(transform);
}

console.log("SOAL 1: KONVERSI DATA");
const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = konversiData(angka, (num) => `ID: ${num}`);
console.log("Hasil konversi:", str);

const dataSekolah = [
    { sekolah: 'SMKN 5 Malang' },
    { sekolah: 'SMKN 6 Malang' },
];
const alphabet = konversiData(dataSekolah, (item) => item.sekolah);
console.log("Nama sekolah:", alphabet);

// SOAL 2 — Generic Class dengan 2 Type Parameter

class PasanganKunci<K, V> {
    private items: Array<{ kunci: K; nilai: V }> = [];

    tambah(kunci: K, nilai: V): void {
        this.items.push({ kunci, nilai });
        console.log(`[ADD] Kunci: ${kunci}, Nilai: ${nilai}`);
    }

    cari(kunci: K): V | undefined {
        const data = this.items.find((item) => item.kunci === kunci);
        return data ? data.nilai : undefined;
    }

    getSemuaKunci(): K[] {
        return this.items.map((item) => item.kunci);
    }
}

console.log("\nSOAL 2: PASANGAN KUNCI");
const pasangan = new PasanganKunci<string, string>();
console.log("Kunci awal:", pasangan.getSemuaKunci());
pasangan.tambah("nilai", "5");
console.log("Kunci setelah tambah:", pasangan.getSemuaKunci());
console.log("Cari 'nilai':", pasangan.cari("nilai"));

// SOAL 3 — Default Type Parameter

interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    nilai: number;
}

const siswa1: Peserta = {
    id: 0,
    nama: "Linda Angellina",
    nilai: 100,
    sekolah: "SMKN 5 Malang"
};

const siswa2: Peserta = {
    id: 1,
    nama: "Aura Sukma",
    nilai: 90,
    sekolah: "SMKN 5 Malang"
};

const allPeserta: Peserta[] = [siswa1, siswa2];

interface ApiResult<T = { message: string }> {
    status: number;
    result: T;
}

console.log("\nSOAL 3: API RESULT");
const success: ApiResult = {
    status: 200,
    result: { message: 'Success' }
};

const failure: ApiResult<Peserta[]> = {
    status: 400,
    result: allPeserta
};

console.log("Success:", success);
console.log("Failure:", failure);

// SOAL 4 — Kombinasi Constraint + Default

interface ListResponse<T extends { id: number } = { id: number; nama: string }> {
    items: T[];
    total: number;
}

console.log("\nSOAL 4: LIST RESPONSE");
const respon1: ListResponse = {
    items: [{ id: 1, nama: "cell" }],
    total: 1000
};

const respon2: ListResponse<Peserta> = {
    items: allPeserta,
    total: 2
};

console.log("Respon Default:", respon1);
console.log("Respon Peserta:", respon2);