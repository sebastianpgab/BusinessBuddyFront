import { Data } from "@angular/router";

export interface Product {
    id: number;
    description: string;
    productType: string;
    price: number;
    color: string;
    stockQuantity: number;
    createDate: Data;
}