import { sharedMemory } from "../lib/adapters/memory/SharedMemory";
import { deleteOperation } from "../lib/actions/deleteOperation";
import { describe, it, expect } from "vitest";

describe("deleteOperation", () => {
    it("should delete an operation", async () => {
        await deleteOperation(1);
        expect(sharedMemory.operations.length).toEqual(5);
    });

    it("should throw an error if the operation is not found", async () => {
        await expect(deleteOperation(100)).rejects.toThrow("Operation not found");
    });
});