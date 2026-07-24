"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderContent(content) {
    if (content.type === "text") {
        return `type: ${content.type} | content: ${content.content}`;
    }
    if (content.type === "video") {
        return `type: ${content.type} | url: ${content.url} | durasi: ${content.durasi}`;
    }
    return `type: ${content.type} | url: ${content.url} | alt: ${content.alt}`;
}
const Novel = {
    type: "text",
    content: "Linda Angellina sedang belajar TypeScript di rumah."
};
const Pemandangan = {
    type: "image",
    url: "https://www.indonesia.travel/id/id/travel-ideas/marine/5-spot-sunset-terbaik-di-labuan-bajo",
    alt: "Pemandangan matahari terbenam di pantai",
};
const Tutorial = {
    type: "video",
    url: "https://youtu.be/3-LYQV0EE78?si=PzIe570p7kVLrevq",
    durasi: 25,
};
console.log("=== SOAL 1: RENDER CONTENT ===");
console.log(renderContent(Novel));
console.log(renderContent(Pemandangan));
console.log(renderContent(Tutorial));
function kirimNotifikasi(kontak, pesan) {
    console.log(`Mengirim notifikasi ke:\natas nama: ${kontak.nama},\ndan email: ${kontak.email}.\ndengan pesan: ${pesan}\n`);
}
function kirimWhatsapp(kontak, pesan) {
    console.log(`Mengirim notif whatsapp ke:\natas nama: ${kontak.nama},\ndan no. whatsapp: ${kontak.telepon}.\ndengan pesan: ${pesan}\n`);
}
const linda = {
    nama: "Linda Angellina",
    email: "lindaangel505@gmail.com",
    telepon: "+62-85-123-456-789"
};
const lindaMinimal = {
    nama: "Linda Angellina",
    email: "lindaangel505@gmail.com",
};
console.log("=== SOAL 2: NOTIFIKASI ===");
kirimWhatsapp(linda, "Tolong belikan es coklat");
kirimNotifikasi(lindaMinimal, "Tolong belikan nasi goreng");
const pelanggan1 = {
    isLoading: false,
    error: null,
    user: {
        nama: "Linda Angellina",
        email: "lindaangel505@gmail.com"
    }
};
const pelanggan2 = {
    isLoading: false,
    error: "Email tidak Valid",
    user: {
        nama: "Aura Sukma",
        email: "Sukma Wulandari@web.web"
    }
};
const makanan = {
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
const fashion = {
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
