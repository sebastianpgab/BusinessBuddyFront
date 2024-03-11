import { Address } from "./address/address";
import { OrderDetail } from "../order/order-detail/order-detail/model";

export interface Customer{
 id?: number;
 firstName: string;
 lastName: string;
 taxNumber: number | null;
 phoneNumber: string; 
 email: string;
 address?: Address;
 orderDetail?: Array<OrderDetail>;
}

