import { Address } from "../address/address";
import { OrderDetail } from "../order-detail/orderDetail";

export interface Customer{
 id?: number;
 firstName: string;
 lastName: string;
 taxNumber: number;
 phoneNumber: string;
 email: string;
 address: Address;
 orderDetail: Array<OrderDetail>;
}

