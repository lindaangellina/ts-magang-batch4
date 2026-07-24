export {};
// src/integrasi-minggu2.ts

// ============================================
// LANGKAH 1 — Definisikan tipe-tipenya
// ============================================

type TaskStatus = "todo" | "in_progress" | "done" | "cancelled";
type Priority = "low" | "medium" | "high" | "urgent";

interface User {
    readonly id: number;
    nama: string;
    email: string;
}

const Linda: User = {
    id: 1,
    nama: "Linda Angellina",
    email: "lindaangel505@gmail.com"
};

interface Task {
    readonly id: number;
    judul: string;
    deskripsi?: string;
    status: TaskStatus;
    prioritas: Priority;
    assignee?: User;
    deadline?: string;
    createdAt: string;
}


// ============================================
// LANGKAH 2 — Discriminated Union untuk TaskEvent
// ============================================

type TaskEvent =
    | { type: "created"; task: Task }
    | { type: "updated"; taskId: number; changes: Partial<Task> }
    | { type: "completed"; taskId: number; completedAt: string }
    | { type: "deleted"; taskId: number; reason: string };


// ============================================
// LANGKAH 3 — Interface TaskManager
// ============================================

interface TaskManager {
    tasks: Task[];
    tambahTask(task: Omit<Task, "id" | "createdAt">): Task;
    updateStatus(id: number, status: TaskStatus): Task | undefined;
    getByPrioritas(prioritas: Priority): Task[];
    getByAssignee(userId: number): Task[];
}


// ============================================
// LANGKAH 4 — Implementasi TaskManager
// ============================================

let taskIdCounter = 1;

const PengelolaanTask: TaskManager = {
    tasks: [],

    tambahTask(task: Omit<Task, "id" | "createdAt">): Task {
        const newTask: Task = {
            ...task,
            id: taskIdCounter++,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        return newTask;
    },

    updateStatus(id: number, status: TaskStatus): Task | undefined {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = status;
            return task;
        }
        return undefined;
    },

    getByPrioritas(prioritas: Priority): Task[] {
        return this.tasks.filter(t => t.prioritas === prioritas);
    },

    getByAssignee(userId: number): Task[] {
        return this.tasks.filter(t => t.assignee?.id === userId);
    }
};


// ============================================
// BUAT MINIMAL 5 TASK (SEMUA ASSIGNEE LINDA)
// ============================================

const task1 = PengelolaanTask.tambahTask({
    judul: "Setup TypeScript Project",
    deskripsi: "Install TypeScript, setup tsconfig.json",
    status: "done",
    prioritas: "high",
    assignee: Linda,
    deadline: "2026-07-20"
});

const task2 = PengelolaanTask.tambahTask({
    judul: "Belajar Interface Dasar",
    deskripsi: "Pelajari interface, optional property, readonly",
    status: "done",
    prioritas: "medium",
    assignee: Linda,
    deadline: "2026-07-21"
});

const task3 = PengelolaanTask.tambahTask({
    judul: "Belajar Type Alias & Extend",
    deskripsi: "Pelajari type alias dan extend interface",
    status: "in_progress",
    prioritas: "urgent",
    assignee: Linda,
    deadline: "2026-07-22"
});

const task4 = PengelolaanTask.tambahTask({
    judul: "Belajar Union & Intersection",
    deskripsi: "Pelajari union types dan intersection types",
    status: "in_progress",
    prioritas: "high",
    assignee: Linda,
    deadline: "2026-07-23"
});

const task5 = PengelolaanTask.tambahTask({
    judul: "Belajar Discriminated Union",
    deskripsi: "Pelajari discriminated union",
    status: "todo",
    prioritas: "medium",
    assignee: Linda,
    deadline: "2026-07-24"
});


// ============================================
// LANGKAH 5 — Fungsi logEvent dengan Exhaustiveness Check
// ============================================

function assertNever(x: never): never {
    throw new Error(`TaskEvent tidak valid: ${JSON.stringify(x)}`);
}

function logEvent(event: TaskEvent): void {
    switch (event.type) {
        case "created":
            console.log(`[CREATED] Tugas "${event.task.judul}" dibuat oleh ${event.task.assignee?.nama || "unassigned"}`);
            break;
        case "updated":
            console.log(`[UPDATED] Tugas ID ${event.taskId} diubah: ${JSON.stringify(event.changes)}`);
            break;
        case "completed":
            console.log(`[COMPLETED] Tugas ID ${event.taskId} selesai pada ${event.completedAt}`);
            break;
        case "deleted":
            console.log(`[DELETED] Tugas ID ${event.taskId} dihapus. Alasan: ${event.reason}`);
            break;
        default:
            assertNever(event);
    }
}


// ============================================
// TESTING
// ============================================

console.log("===== SISTEM MANAJEMEN TUGAS =====");
console.log(`Total tugas: ${PengelolaanTask.tasks.length}\n`);

console.log("--- Semua Tugas ---");
PengelolaanTask.tasks.forEach(t => {
    console.log(`[${t.id}] ${t.judul} (${t.status}) - Prioritas: ${t.prioritas} ${t.assignee ? `- Assignee: ${t.assignee.nama}` : ""}`);
});

console.log("\n--- Update Status ---");
PengelolaanTask.updateStatus(5, "in_progress");
console.log("Status tugas 5 diubah menjadi in_progress");

console.log("\n--- Tugas dengan Prioritas URGENT ---");
console.log(PengelolaanTask.getByPrioritas("urgent"));

console.log("\n--- Tugas Assignee Linda (ID: 1) ---");
console.log(PengelolaanTask.getByAssignee(1));

console.log("\n===== TASK EVENT LOG =====");
logEvent({ type: "created", task: task1 });
logEvent({ type: "updated", taskId: 3, changes: { status: "done", prioritas: "urgent" } });
logEvent({ type: "completed", taskId: 2, completedAt: new Date().toISOString() });
logEvent({ type: "deleted", taskId: 5, reason: "Task duplikat" });