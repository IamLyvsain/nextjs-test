import { Company } from "@/lib/models/company";
import { ICompanyRepository } from "../../repositories/CompanyRepository";

export class MemoryCompanyRepository implements ICompanyRepository {
    readCompanyById(id: number): Promise<Company> {
        throw new Error("Method not implemented.");
    }
 
    async readCompanies(): Promise<Company[]> {
        return [];
    }
}