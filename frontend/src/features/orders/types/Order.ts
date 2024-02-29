import { OrderItem } from "./OrderItem";

type Order = {
  id: number;
  status:string;
  contact:string;
  createdAt: string;
  updatedAt:string;
  OrderItems: OrderItem[];
}

export type OrderId = Order['id']

export default Order;