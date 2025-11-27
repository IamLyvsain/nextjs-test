import { Company } from "../models/company";

export interface ICompanyRepository {
    readCompanies(): Promise<Company[]>;
    readCompanyById(id: number): Promise<Company>;
}