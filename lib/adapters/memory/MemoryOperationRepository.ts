import { Operation } from "../../models/operation";
import { IOperationRepository } from "../../repositories/OperationRepository";
import { sharedMemory } from "./SharedMemory";

export class MemoryOperationRepository implements IOperationRepository {

    async readOperations(): Promise<Operation[]> {
        return sharedMemory.operations;
    }

    async deleteOperation(id: number): Promise<void> {
        const operation = sharedMemory.operations.find((operation) => operation.id === id);
        if (!operation) {
            throw new Error("Operation not found");
        }
        sharedMemory.operations = sharedMemory.operations.filter((operation) => operation.id !== id);
    }

}