import Order from "./Order";

type OrdersState = {
  orders: Order[];
  loadError?: string;
};

export default OrdersState;
