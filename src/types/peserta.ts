export interface Peserta {
    nama: string;
    sekolah: string;
    nilai: number;
}

export type StatusPeserta = "aktif" | "lulus" | "berhenti";