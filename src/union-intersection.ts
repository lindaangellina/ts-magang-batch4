export {};
// src/union-intersection.ts

// ============================================
// SOAL 1 — Union Types
// ============================================

type TextContent = {
    type: "text";
    content: string;
};

type ImageContent = {
    type: "image";
    url: string;
    alt: string;
};

type VideoContent = {
    type: "video";
    url: string;
    durasi: number;
};

type Content = TextContent | ImageContent | VideoContent;

function renderContent(content: Content): string {
    if (content.type === "text") {
        return `type: ${content.type} | content: ${content.content}`;
    }
    if (content.type === "video") {
        return `type: ${content.type} | url: ${content.url} | durasi: ${content.durasi}`;
    }
    return `type: ${content.type} | url: ${content.url} | alt: ${content.alt}`;
}

const Novel: TextContent = {
    type: "text",
    content: "Linda Angellina sedang belajar TypeScript di rumah."
};

const Pemandangan: ImageContent = {
    type: "image",
    url: "https://www.indonesia.travel/id/id/travel-ideas/marine/5-spot-sunset-terbaik-di-labuan-bajo",
    alt: "Pemandangan matahari terbenam di pantai",
};

const Tutorial: VideoContent = {
    type: "video",
    url: "https://youtu.be/3-LYQV0EE78?si=PzIe570p7kVLrevq",
    durasi: 25,
};

console.log("=== SOAL 1: RENDER CONTENT ===");
console.log(renderContent(Novel));
console.log(renderContent(Pemandangan));
console.log(renderContent(Tutorial));


// ============================================
// SOAL 2 — Intersection Types
// ============================================

interface HasNama {
    nama: string;
}

interface HasEmail {
    email: string;
}

interface HasTelepon {
    telepon: string;
}

type KontakLengkap = HasNama & HasEmail & HasTelepon;
type KontakMinimal = HasNama & HasEmail;

function kirimNotifikasi(kontak: KontakMinimal, pesan: string): void {
    console.log(`Mengirim notifikasi ke:\natas nama: ${kontak.nama},\ndan email: ${kontak.email}.\ndengan pesan: ${pesan}\n`);
}

function kirimWhatsapp(kontak: KontakLengkap, pesan: string): void {
    console.log(`Mengirim notif whatsapp ke:\natas nama: ${kontak.nama},\ndan no. whatsapp: ${kontak.telepon}.\ndengan pesan: ${pesan}\n`);
}

const linda: KontakLengkap = {
    nama: "Linda Angellina",
    email: "lindaangel505@gmail.com",
    telepon: "+62-85-123-456-789"
};

const lindaMinimal: KontakMinimal = {
    nama: "Linda Angellina",
    email: "lindaangel505@gmail.com",
};

console.log("=== SOAL 2: NOTIFIKASI ===");
kirimWhatsapp(linda, "Tolong belikan es coklat");
kirimNotifikasi(lindaMinimal, "Tolong belikan nasi goreng");


// ============================================
// SOAL 3 — WithLoading Pattern
// ============================================

type WithLoading<T> = T & {
    isLoading: boolean;
    error: string | null;
};

type UserState = WithLoading<{ user: { nama: string; email: string } | null }>;
type ProductState = WithLoading<{ products: { id: number; nama: string }[] }>;

const pelanggan1: UserState = {
    isLoading: false,
    error: null,
    user: {
        nama: "Linda Angellina",
        email: "lindaangel505@gmail.com"
    }
};

const pelanggan2: UserState = {
    isLoading: false,
    error: "Email tidak Valid",
    user: {
        nama: "Aura Sukma",
        email: "Sukma Wulandari@web.web"
    }
};

const makanan: ProductState = {
    isLoading: true,
    error: null,
    products: [
        {
            id: 1,
            nama: "Kopi dengan Gula"
        },
        {
            id: 2,
            nama: "Es coklat"
        }
    ]
};

const fashion: ProductState = {
    isLoading: false,
    error: "id duplikasi, ganti salah satu dengan id yang lain",
    products: [
        {
            id: 1,
            nama: "Tas miumiu"
        },
        {
            id: 1,
            nama: "Baju Dior"
        }
    ]
};

console.log("\n=== SOAL 3: WITH LOADING ===");
console.log("User State 1:", pelanggan1);
console.log("User State 2 (Error):", pelanggan2);
console.log("Product State (Loading):", makanan);
console.log("Product State (Error):", fashion);