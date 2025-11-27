export type Operation = {
    id: number;
    commercialName: string;
    companyId: number;
    deliveryDate: Date;
    address: string;
    availableLots: number;
    reservedLots: number;
    totalArea: number;
    estimatedCost: number;
    picture: string;
}