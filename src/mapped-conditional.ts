export {};
// src/mapped-conditional.ts

// SOAL 1 — Mapped Type: SemuaOptional

type SemuaOptional<T> = {
    [K in keyof T]?: T[K];
};

interface JurnalHarian {
    id: number;
    nama: string;
    status: 'success' | 'error';
}

type JurnalOpsional = SemuaOptional<JurnalHarian>;

const jurnalSenin: JurnalOpsional = {
    id: 1,
    nama: "Linda Angellina",
};

console.log("SOAL 1: SEMUA OPTIONAL");
console.log(jurnalSenin);

// SOAL 2 — Mapped Type: Nullable

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

type JurnalNullable = Nullable<JurnalHarian>;

const jurnalNull: JurnalNullable = {
    id: 1,
    nama: null,
    status: 'success',
};

console.log("\nSOAL 2: NULLABLE");
console.log(jurnalNull);

// SOAL 3 — Mapped Type: DenganSetter

type DenganSetter<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

type JurnalSetter = DenganSetter<JurnalHarian>;

const jurnalSetter: JurnalSetter = {
    setId: (value) => { console.log(`Set id: ${value}`); },
    setNama: (value) => { console.log(`Set nama: ${value}`); },
    setStatus: (value) => { console.log(`Set status: ${value}`); },
};

console.log("\nSOAL 3: DENGAN SETTER");
jurnalSetter.setNama("Linda Angellina");

// SOAL 4 — Conditional Type: TipeNilai

type TipeNilai<T> = T extends number 
    ? "angka" 
    : T extends string 
        ? "teks" 
        : T extends boolean 
            ? "boolean" 
            : "lainnya";

type TestNumber = TipeNilai<number>;
type TestString = TipeNilai<string>; 
type TestBoolean = TipeNilai<boolean>;
type TestArray = TipeNilai<number[]>;  

console.log("\nSOAL 4: TIPE NILAI");
console.log("TipeNilai<number>:", "angka" as TestNumber);
console.log("TipeNilai<string>:", "teks" as TestString);
console.log("TipeNilai<boolean>:", "boolean" as TestBoolean);
console.log("TipeNilai<number[]>:", "lainnya" as TestArray);

// SOAL 5 — Conditional dengan infer

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<number>;  
type C = UnwrapPromise<Promise<{ id: number }>>; 

const pesan: UnwrapPromise<Promise<string>> = "Halo Linda, ini hasil unwrap!";

console.log("\nSOAL 5: UNWRAP PROMISE");
console.log("UnwrapPromise<Promise<string>>:", pesan);
console.log("UnwrapPromise<number>:", 42 as B);
console.log("UnwrapPromise<Promise<{id: number}>>:", { id: 1 } as C);