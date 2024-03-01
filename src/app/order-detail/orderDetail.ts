import { Address } from "../customer/address/address";

export interface OrderDetail {
id?: number;
orderDate: Date;
completionDate: Date;
orderStatus: string;
notes: string;
paymentMethod: string;
finalAmount: number;
deliveryId?: number;
deliveryAddress?: Address;
orderId?: number;
//order?: Order;
//orderProducts?: Array<OrderProduct>;
idCompany?: number;
}