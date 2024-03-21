export interface OrderProduct {
    id: number;
    totalAmount?: number;
    quantity: number;
    productId: number;
    orderDetailId?: number;
}