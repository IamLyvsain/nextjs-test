import { listOperations } from "../lib/actions/listOperations";
import { describe, it, expect } from "vitest";

describe("listOperations", () => {
    it("should return a list of operations", async () => {
        const operations = await listOperations();
        expect(operations).toBeDefined();
        expect(operations.length).toEqual(6);
        expect(operations[0].commercialName).toEqual("Operation Alpha");
    });
});