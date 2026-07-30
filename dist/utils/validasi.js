"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNamaValid = isNamaValid;
exports.isNilaiValid = isNilaiValid;
function isNamaValid(nama) {
    return nama.length >= 3;
}
function isNilaiValid(nilai) {
    return nilai >= 0 && nilai <= 100;
}
