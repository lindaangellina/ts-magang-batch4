export {};
// src/repository-pattern.ts

// BASE REPOSITORY

interface Entity {
    id: number;
}

class Repository<T extends Entity> {
    private items: T[] = [];
    private nextId: number = 1;

    create(data: Omit<T, "id">): T {
        const newItem = { ...data, id: this.nextId++ } as T;
        this.items.push(newItem);
        console.log(`[CREATE] Item ID ${newItem.id} berhasil dibuat`);
        return newItem;
    }

    findById(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }

    findAll(): T[] {
        return [...this.items];
    }

    update(id: number, data: Partial<T>): T | undefined {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return undefined;
        this.items[index] = { ...this.items[index], ...data } as T;
        console.log(`[UPDATE] Item ID ${id} berhasil diupdate`);
        return this.items[index];
    }

    delete(id: number): boolean {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return false;
        this.items.splice(index, 1);
        console.log(`[DELETE] Item ID ${id} berhasil dihapus`);
        return true;
    }

    count(): number {
        return this.items.length;
    }
}

// SOAL 1 — MentorRepository

interface Mentor extends Entity {
    nama: string;
    keahlian: string[];
}

console.log("SOAL 1: MENTOR REPOSITORY");
const mentorRepo = new Repository<Mentor>();

const linda = mentorRepo.create({
    nama: "Linda Angellina",
    keahlian: ["TypeScript", "React", "Node.js"]
});
const zidan = mentorRepo.create({
    nama: "Zidan Alfa",
    keahlian: ["Laravel", "Vue"]
});

console.log("\nSemua Mentor:", mentorRepo.findAll());
console.log("Cari ID 1:", mentorRepo.findById(1));

mentorRepo.update(1, { nama: "Linda Angellina (Magang)" });
mentorRepo.update(2, { nama: "Zidan Alfa Permana" });

console.log("\nSetelah update:");
console.log("ID 1:", mentorRepo.findById(1));
console.log("ID 2:", mentorRepo.findById(2));

mentorRepo.delete(1);
console.log("\nSetelah delete ID 1:", mentorRepo.findAll());
mentorRepo.delete(2);
console.log("Setelah delete ID 2:", mentorRepo.findAll());

// SOAL 2 — PesertaRepository

interface Peserta extends Entity {
    nama: string;
    sekolah: string;
    fase: number;
}

class PesertaRepository extends Repository<Peserta> {
    findBySekolah(sekolah: string): Peserta[] {
        return this.findAll().filter((item) => item.sekolah === sekolah);
    }

    findByFase(fase: number): Peserta[] {
        return this.findAll().filter((item) => item.fase === fase);
    }
}

console.log("\nSOAL 2: PESERTA REPOSITORY");
const pesertaRepo = new PesertaRepository();

pesertaRepo.create({ nama: "Linda Angellina", sekolah: "SMK 5 Malang", fase: 1 });
pesertaRepo.create({ nama: "Zidan Alfa", sekolah: "SMK 5 Malang", fase: 2 });
pesertaRepo.create({ nama: "Aura Sukma", sekolah: "SMK 6 Malang", fase: 2 });

console.log("\nSemua Peserta:", pesertaRepo.findAll());
console.log("Peserta SMK 5 Malang:", pesertaRepo.findBySekolah("SMK 5 Malang"));
console.log("Peserta SMK 6 Malang:", pesertaRepo.findBySekolah("SMK 6 Malang"));
console.log("Peserta Fase 1:", pesertaRepo.findByFase(1));
console.log("Peserta Fase 2:", pesertaRepo.findByFase(2));

// SOAL 3 — Repository dengan Validasi

interface Buku extends Entity {
    nama: string;
    genre: string[];
}

class BukuRepo extends Repository<Buku> {
    create(data: Omit<Buku, "id">): Buku {
        if (!data.nama || data.nama.trim().length === 0) {
            throw new Error("Nama buku wajib diisi!");
        }
        if (data.nama.trim().length < 3) {
            throw new Error("Nama buku minimal 3 karakter!");
        }
        if (!data.genre || data.genre.length === 0) {
            throw new Error("Genre buku wajib diisi!");
        }
        return super.create(data);
    }
}

console.log("\nSOAL 3: VALIDASI REPOSITORY");
const bookRepo = new BukuRepo();

console.log("Membuat buku dengan data valid:");
bookRepo.create({
    nama: "Komedi ala Budi",
    genre: ['Komedi', 'Lucu', 'Kocak']
});
console.log("Semua Buku:", bookRepo.findAll());

console.log("\nMencoba membuat buku dengan nama kosong:");
try {
    bookRepo.create({ nama: '', genre: ['Komedi'] });
} catch (e) {
    console.log((e as Error).message);
}