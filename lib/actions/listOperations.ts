"use server";

import { operationRepository } from "../config";
import { Operation } from "../models/operation";

export async function listOperations(): Promise<Operation[]> {
    return await operationRepository.readOperations();
}