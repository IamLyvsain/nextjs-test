import { MemoryOperationRepository } from "./adapters/memory/MemoryOperationRepository";
import { MemoryCompanyRepository } from "./adapters/memory/MemoryCompanyReposttory";

export const operationRepository = new MemoryOperationRepository();
export const companyRepository = new MemoryCompanyRepository();