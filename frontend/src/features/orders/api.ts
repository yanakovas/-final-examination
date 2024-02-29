import Order, { OrderId } from './types/Order';

export async function loadOrders(): Promise<Order[]> {
  
  const response = await fetch('/api/orders');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

export async function deleteOrder (id: OrderId): Promise<number> {
  const response = await fetch(`/api/orders/${id}`, {
    method: 'DELETE'
  });
  const result = await response.json();
  console.log("result:", result, "response:", response);
  
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
}


export async function updateOrder (order: Order): Promise<void> {
  await fetch(`/api/orders/${order.id}`, {
    method: 'PUT',  
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },  })
}

