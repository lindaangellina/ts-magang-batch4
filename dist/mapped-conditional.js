"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jurnalSenin = {
    id: 1,
    nama: "Linda Angellina",
};
console.log("SOAL 1: SEMUA OPTIONAL");
console.log(jurnalSenin);
const jurnalNull = {
    id: 1,
    nama: null,
    status: 'success',
};
console.log("\nSOAL 2: NULLABLE");
console.log(jurnalNull);
const jurnalSetter = {
    setId: (value) => { console.log(`Set id: ${value}`); },
    setNama: (value) => { console.log(`Set nama: ${value}`); },
    setStatus: (value) => { console.log(`Set status: ${value}`); },
};
console.log("\nSOAL 3: DENGAN SETTER");
jurnalSetter.setNama("Linda Angellina");
console.log("\nSOAL 4: TIPE NILAI");
console.log("TipeNilai<number>:", "angka");
console.log("TipeNilai<string>:", "teks");
console.log("TipeNilai<boolean>:", "boolean");
console.log("TipeNilai<number[]>:", "lainnya");
const pesan = "Halo Linda, ini hasil unwrap!";
console.log("\nSOAL 5: UNWRAP PROMISE");
console.log("UnwrapPromise<Promise<string>>:", pesan);
console.log("UnwrapPromise<number>:", 42);
console.log("UnwrapPromise<Promise<{id: number}>>:", { id: 1 });
