import Item, { ItemId } from './types/Item';

export async function loadItems(): Promise<Item[]> {
  
  const response = await fetch('/api/items');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

export async function deleteItem (id: ItemId): Promise<number> {
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE'
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

export async function createItem (item: Item): Promise<Item> {
  const response = await fetch ('/api/items', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  }
    return response.json();
}

export async function updateItem (item: Item): Promise<void> {

  const response = await fetch(`/api/items/${item.id}`, {
    method: 'PUT',  
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },  })
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    }
      return response.json();
}

