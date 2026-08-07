export {};
// src/getter-setter.ts

// SOAL 1 — Akun dengan Saldo

class Akun {
    private _saldo: number = 0;

    get saldo(): number {
        return this._saldo;
    }

    set saldo(nilai: number) {
        if (nilai < 0) {
            console.log("Saldo tidak boleh negatif!");
            return;
        }
        this._saldo = nilai;
    }

    tambahSaldo(jumlah: number): void {
        if (jumlah <= 0) {
            console.log("Jumlah harus lebih dari 0!");
            return;
        }
        this._saldo += jumlah;
        console.log(`Saldo bertambah Rp${jumlah}. Saldo sekarang: Rp${this._saldo}`);
    }

    tarikSaldo(jumlah: number): boolean {
        if (jumlah <= 0) {
            console.log("Jumlah harus lebih dari 0!");
            return false;
        }
        if (this._saldo < jumlah) {
            console.log(`Saldo tidak cukup! Saldo: Rp${this._saldo}, Tarik: Rp${jumlah}`);
            return false;
        }
        this._saldo -= jumlah;
        console.log(`Saldo ditarik Rp${jumlah}. Saldo sekarang: Rp${this._saldo}`);
        return true;
    }
}

console.log("=== SOAL 1: AKUN ===");
const akun = new Akun();
akun.saldo = 100000;
console.log(`Saldo: Rp${akun.saldo}`);

akun.tambahSaldo(50000);
akun.tarikSaldo(30000);
akun.tarikSaldo(200000);


// SOAL 2 — Peserta Magang

class PesertaMagang {
    private nilaiList: number[] = [];

    constructor(public nama: string) {}

    tambahNilai(nilai: number): void {
        if (nilai < 0 || nilai > 100) {
            console.log(`Nilai ${nilai} tidak valid! (0-100)`);
            return;
        }
        this.nilaiList.push(nilai);
        console.log(`Nilai ${nilai} ditambahkan untuk ${this.nama}`);
    }

    get rataRata(): number {
        if (this.nilaiList.length === 0) return 0;
        const total = this.nilaiList.reduce((sum, n) => sum + n, 0);
        return total / this.nilaiList.length;
    }

    get nilaiTertinggi(): number {
        if (this.nilaiList.length === 0) return 0;
        return Math.max(...this.nilaiList);
    }

    get grade(): string {
        const rata = this.rataRata;
        if (rata >= 90) return "A";
        if (rata >= 75) return "B";
        if (rata >= 60) return "C";
        return "D";
    }
}

console.log("\n=== SOAL 2: PESERTA MAGANG ===");
const peserta = new PesertaMagang("Linda Angellina");
peserta.tambahNilai(85);
peserta.tambahNilai(90);
peserta.tambahNilai(78);
peserta.tambahNilai(95);

console.log(`Nama: ${peserta.nama}`);
console.log(`Rata-rata: ${peserta.rataRata}`);
console.log(`Nilai Tertinggi: ${peserta.nilaiTertinggi}`);
console.log(`Grade: ${peserta.grade}`);


// SOAL 3 — Password

class Password {
    private _value: string = "";

    set value(input: string) {
        if (input.length < 8) {
            throw new Error("Password harus minimal 8 karakter!");
        }
        if (!/\d/.test(input)) {
            throw new Error("Password harus mengandung angka!");
        }
        this._value = input;
        console.log("Password berhasil dibuat.");
    }

    get value(): string {
        return "********";
    }

    verifikasi(input: string): boolean {
        return this._value === input;
    }
}

console.log("\n=== SOAL 3: PASSWORD ===");
const password = new Password();

try {
    password.value = "rahasia";
} catch (e) {
    console.log((e as Error).message);
}

try {
    password.value = "rahasia123";
    console.log(`Password yang disimpan: ${password.value}`); 
    console.log(`Verifikasi "rahasia123": ${password.verifikasi("rahasia123")}`);
    console.log(`Verifikasi "salah": ${password.verifikasi("salah")}`);
} catch (e) {
    console.log((e as Error).message);
}