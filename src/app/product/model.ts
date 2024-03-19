import { Other } from "./products-type/model-other";
import { Clothe } from "./products-type/model-clothe";
import { Mug } from "./products-type/model-mug";
import { Data } from "@angular/router";

export interface Product {
    id: number;
    productType: string;
    price: number;
    color: string;
    stockQuantity: number;
    createDate: Data;
    clothe: Clothe;
    mug: Mug;
    other: Other;
}