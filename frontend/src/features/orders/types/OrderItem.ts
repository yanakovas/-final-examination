import Item, { ItemId } from "../../items/types/Item";

export type OrderItem = {
  quantity: number;
  order_id: number;
  item_id:number;
  Item: Item;
}

