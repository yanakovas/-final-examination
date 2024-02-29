import ItemData from "./ItemData";

type Item = ItemData & {
  id: number;
}

export type ItemId = Item['id']

export default Item;