"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successPayment = {
    status: "berhasil",
    transactionId: "628542a4-f412-4c2f-86cf-63ecec04bbb5",
    paidAt: "01-01-2026"
};
const pendingPayment = {
    status: "menunggu",
    expiredAt: "02-01-2026"
};
const refundPayment = {
    status: "refund",
    amount: 1000000,
    processedAt: "03-01-2026"
};
const canceledPayment = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: false
};
const canceledPaymentCanRetry = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: true
};
function getStatusLabel(payment) {
    switch (payment.status) {
        case "berhasil":
            return `Berhasil Membayar pada ${payment.paidAt}\n`;
        case "refund":
            return `Refund Berhasil pada ${payment.processedAt}\nSejumlah: Rp. ${Number(payment.amount).toFixed(2)}\n`;
        case "gagal":
            return `Pembayaran gagal dikarenakan ${payment.reason}\n${payment.canRetry ? "Silahkan Coba lagi" : "Mohon hubungi admin ya"}\n`;
        case "menunggu":
            return `Pembayaran kamu saat ini sedang dalam tahap review\nJika pembayaran tetap di status menunggu mohon coba lagi pada ${payment.expiredAt}\n`;
        default:
            return "Data Status Payment tidak valid\n";
    }
}
console.log("=== SOAL 1: STATUS PEMBAYARAN ===");
console.log(getStatusLabel(successPayment));
console.log(getStatusLabel(pendingPayment));
console.log(getStatusLabel(canceledPayment));
console.log(getStatusLabel(canceledPaymentCanRetry));
console.log(getStatusLabel(refundPayment));
const successNotification = {
    type: "success",
    message: "Pesan Berhasil terkirim",
    duration: 5
};
const errorNotification = {
    type: "error",
    message: "Pesan tidak ditemukan",
    code: 404,
    canDismiss: true
};
const warningNotification = {
    type: "warning",
    message: "Peringatan pesan harus diisi",
    action: "Fill Required Field"
};
const infoNotification = {
    type: "info",
    message: "Terdapat pesan terbaru"
};
function showNotification(notif) {
    switch (notif.type) {
        case "success":
            console.log(`[SUKSES] ${notif.message} (Durasi: ${notif.duration} detik)`);
            break;
        case "error":
            console.log(`[ERROR] Kode ${notif.code}: ${notif.message} ${notif.canDismiss ? "(Bisa ditutup)" : "(Tidak bisa ditutup)"}`);
            break;
        case "warning":
            console.log(`[PERINGATAN] ${notif.message} (Aksi: ${notif.action})`);
            break;
        case "info":
            console.log(`[INFO] ${notif.message}`);
            break;
        default:
            console.log("Notification tidak valid, harap coba lagi");
    }
}
console.log("\n=== SOAL 2: NOTIFIKASI ===");
showNotification(successNotification);
showNotification(errorNotification);
showNotification(warningNotification);
showNotification(infoNotification);
function assertNever(x) {
    throw new Error(`Cli command tidak valid: \n${JSON.stringify(x, null, 2)}`);
}
function executeCommand(cmd) {
    switch (cmd.command) {
        case "clear":
            return "Berhasil menghapus semua data";
        case "add":
            return `Berhasil menambahkan data: ${cmd.item}`;
        case "remove":
            return `Berhasil menghapus data dengan ID: ${cmd.id}`;
        case "list":
            return `Berhasil mengambil semua data dengan filter: ${cmd.filter || "tanpa filter"}`;
        default:
            return assertNever(cmd);
    }
}
const dataKeuangan = {
    command: "list",
    filter: "status: aktif",
};
const addCommand = {
    command: "add",
    item: "Buku Catatan"
};
const removeCommand = {
    command: "remove",
    id: 5
};
const clearCommand = {
    command: "clear"
};
console.log("\n=== SOAL 3: CLI COMMANDS ===");
console.log(executeCommand(dataKeuangan));
console.log(executeCommand(addCommand));
console.log(executeCommand(removeCommand));
console.log(executeCommand(clearCommand));
