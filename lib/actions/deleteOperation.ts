"use server";

import { operationRepository } from "../config";

export async function deleteOperation(id: number) {
    await operationRepository.deleteOperation(id);
}