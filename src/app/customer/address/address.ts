export interface Address {
    id?: number;
    street: string;
    buildingNumber?: string;
    apartmentNumber?: string;
    postalCode: string;
    city: string;
    clientId?: number;
    orderDetailId?: number;
}