import { OrderProduct } from "src/app/order/order-products/model";
import { Address } from "../../customer/address/address";

enum PaymentMethod
{
    Cash,
    CreditCard,
    BankTransfer,
}

export interface OrderDetail {
id?: number;
orderDate?: Date;
completionDate?: Date;
status?: number;
notes?: string;
paymentMethod?: PaymentMethod;
finalAmount?: number;
deliveryId?: number;
orderId?: number;
}