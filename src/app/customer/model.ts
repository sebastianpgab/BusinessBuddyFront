import { OrderDetail } from "../order/order-detail/model";
import { Address } from "./address/address";

export interface Customer{
 id?: number;
 firstName: string;
 lastName: string;
 taxNumber: number | null;
 phoneNumber: string; 
 email: string;
}

