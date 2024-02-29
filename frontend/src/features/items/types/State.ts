import Item from './Item';

type ItemsState = {
  items: Item[];
  loadError?: string;
  updateError?: string;
};

export default ItemsState;
