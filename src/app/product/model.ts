import { Data } from "@angular/router";

export interface Product {
    int: number;
    productType: string;
    price: number;
    color: string;
    stockQuantity: number;
    createDate: Data;
  /*clothe: Clothe;
    mug: Mug;
    other: Other;*/
}