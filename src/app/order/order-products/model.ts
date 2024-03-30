import { Product } from "src/app/product/model";

export interface OrderProduct {
    id?: number;
    totalAmount?: number;
    quantity: number;
    productId: number;
    orderDetailId?: number;
    product: Product;
}