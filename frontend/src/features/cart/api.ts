import CartItem from './types/CartItem';
// export async function loadItems(): Promise<Item[]> {
//   const response = await fetch('/api/cart/order');

//   const result = await response.json();
//   if (response.ok) {
//     return result;
//   } else {
//     throw new Error(result.error);
//   }
// }

export async function createOrder(
  cartItems: CartItem[],
  contact: string
): Promise<boolean> {
  const response = await fetch(`/api/cart/order`, {
    method: 'POST',
    body: JSON.stringify({ cartItems, contact }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}
