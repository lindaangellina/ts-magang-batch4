export {};
// src/integrasi-minggu6.ts

// STUDI KASUS: Type-Safe Event System untuk SiTrack

// langkah 1 — Definisikan entity dasar
interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    fase: number;
    email: string;
}

interface JurnalHarian {
    id: number;
    pesertaId: number;
    tanggal: string;
    kegiatan: string;
    statusReview: "belum" | "sudah";
}

// langkah 2 — Utility types
type PesertaBaru = Omit<Peserta, "id">;
type PesertaUpdate = Partial<Omit<Peserta, "id">>;
type PesertaPublik = Pick<Peserta, "id" | "nama" | "sekolah">;

type JurnalBaru = Omit<JurnalHarian, "id" | "statusReview">;
type JurnalUpdate = Partial<Omit<JurnalHarian, "id" | "pesertaId">>;

// langkah 3 — Template literal untuk event names
type EntityName = "peserta" | "jurnal";
type EventAksi = "created" | "updated" | "deleted";
type EventName = `${EntityName}:${EventAksi}`;

// langkah 4 — Mapped type untuk event payload
type EventPayload = {
    "peserta:created": Peserta;
    "peserta:updated": { id: number; changes: PesertaUpdate };
    "peserta:deleted": { id: number };
    "jurnal:created": JurnalHarian;
    "jurnal:updated": { id: number; changes: JurnalUpdate };
    "jurnal:deleted": { id: number };
};

// langkah 5 — Type-safe event emitter
class EventBus {
    private handlers: Partial<Record<EventName, Function[]>> = {};

    on<E extends EventName>(
        event: E,
        handler: (payload: EventPayload[E]) => void
    ): void {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event]!.push(handler);
    }

    emit<E extends EventName>(event: E, payload: EventPayload[E]): void {
        const eventHandlers = this.handlers[event];
        if (!eventHandlers) return;
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

// langkah 7 Conditional type
type IsListResponse<T> = T extends any[]
    ? { items: T; total: number }
    : { item: T };

type SingleResponse = IsListResponse<Peserta>;
type ListResponse = IsListResponse<Peserta[]>;

console.log("\nCONDITIONAL TYPE");

const satu: SingleResponse = {
    item: {
        id: 1,
        nama: "Linda Angellina",
        sekolah: "SMK 5 Malang",
        fase: 1,
        email: "linda@mail.com"
    }
};

const banyak: ListResponse = {
    items: [satu.item],
    total: 1
};

console.log("Single Response:", satu);
console.log("List Response:", banyak);