"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// langkah 5 — Type-safe event emitter
class EventBus {
    constructor() {
        this.handlers = {};
    }
    on(event, handler) {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);
    }
    emit(event, payload) {
        const eventHandlers = this.handlers[event];
        if (!eventHandlers)
            return;
        eventHandlers.forEach((h) => h(payload));
    }
}
// langkah 6 — Implementasi & test
console.log("STUDI KASUS: TYPE-SAFE EVENT SYSTEM\n");
const bus = new EventBus();
bus.on("peserta:created", (peserta) => {
    console.log(`[EVENT] Peserta baru: ${peserta.nama} dari ${peserta.sekolah}`);
});
bus.on("jurnal:updated", (data) => {
    console.log(`[EVENT] Jurnal ${data.id} diupdate:`, data.changes);
});
bus.emit("peserta:created", {
    id: 1,
    nama: "Linda Angellina",
    sekolah: "SMK 5 Malang",
    fase: 1,
    email: "linda@mail.com"
});
bus.emit("peserta:created", {
    id: 2,
    nama: "Aura Sukma",
    sekolah: "SMK 6 Malang",
    fase: 2,
    email: "aura@mail.com"
});
bus.emit("jurnal:updated", {
    id: 5,
    changes: { statusReview: "sudah" }
});
console.log("\nCONDITIONAL TYPE");
const satu = {
    item: {
        id: 1,
        nama: "Linda Angellina",
        sekolah: "SMK 5 Malang",
        fase: 1,
        email: "linda@mail.com"
    }
};
const banyak = {
    items: [satu.item],
    total: 1
};
console.log("Single Response:", satu);
console.log("List Response:", banyak);
