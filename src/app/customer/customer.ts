import { Address } from "../address/address";
import { OrderDetail } from "../order-detail/orderDetail";

export interface Customer{
 id?: number;
 firstName: string | null;
 lastName: string | null;
 taxNumber: number | null;
 phoneNumber: string | null; 
 email: string | null;
 address?: Address;
 orderDetail?: Array<OrderDetail>;
}

