import { Address } from "../customer/address/address";
import { Customer } from "../customer/model";
import { OrderDetail } from "../order/order-detail/model";
import { OrderProduct } from "../order/order-products/model";
import { Order } from "../order/order/model";

export interface Purchase {

    ClientDto: Customer;
    AddressDto: Address;
    OrderDto: Order;
    OrderDetailDto: OrderDetail;
    OrderProductsDto: Array<OrderProduct>;
}