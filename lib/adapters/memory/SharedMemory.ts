import { Company } from "../../models/company";
import { Operation } from "../../models/operation";

class InMemory {
    companies: Company[] = [
        { id: 1, name: "Acme Corp", indentificationNumber: "1234567890" },
        { id: 2, name: "Globex Inc.", indentificationNumber: "0987654321" }
    ];
    operations: Operation[] = [
    {
        id: 1,
        commercialName: "Operation Alpha",
        companyId: 1,
        deliveryDate: new Date("2024-07-01"),
        address: "123 Main St, Cityville",
        availableLots: 10,
        reservedLots: 2,
        totalArea: 1500,
        estimatedCost: 500000,
        picture: "op_1.jpg"
    },
    {
        id: 2,
        commercialName: "Operation Beta",
        companyId: 2,
        deliveryDate: new Date("2024-07-15"),
        address: "456 Oak St, Townsville",
        availableLots: 8,
        reservedLots: 1,
        totalArea: 1800,
        estimatedCost: 600000,
        picture: "op_2.jpg"
    },
    {
        id: 3,
        commercialName: "Operation Gamma",
        companyId: 1,
        deliveryDate: new Date("2024-08-05"),
        address: "789 Pine St, Hamlet",
        availableLots: 15,
        reservedLots: 5,
        totalArea: 2000,
        estimatedCost: 800000,
        picture: "op_3.jpg"
    },
    {
        id: 4,
        commercialName: "Operation Delta",
        companyId: 2,
        deliveryDate: new Date("2024-09-12"),
        address: "321 Maple Ave, Village",
        availableLots: 20,
        reservedLots: 10,
        totalArea: 2500,
        estimatedCost: 1000000,
        picture: "op_4.jpg"
    },
    {
        id: 5,
        commercialName: "Operation Epsilon",
        companyId: 1,
        deliveryDate: new Date("2024-10-03"),
        address: "654 Walnut Rd, Borough",
        availableLots: 12,
        reservedLots: 4,
        totalArea: 1700,
        estimatedCost: 700000,
        picture: "op_5.jpg"
    },
    {
        id: 6,
        commercialName: "Operation Zeta",
        companyId: 2,
        deliveryDate: new Date("2024-11-20"),
        address: "987 Cedar Blvd, Township",
        availableLots: 18,
        reservedLots: 8,
        totalArea: 2200,
        estimatedCost: 900000,
        picture: "op_6.jpg"
    }
    ];

    clear() {
        this.operations = [];
        this.companies = [];
    }
}

export const sharedMemory = new InMemory();