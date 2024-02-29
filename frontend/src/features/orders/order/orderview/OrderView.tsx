import Order, { OrderId } from "../../types/Order";
import React from "react";

type OrderProps = {
  order: Order;
  onRemove?: (itemId: OrderId) => void;
  onUpdate?: (newItem: Order) => void;
};

function OrderView({ order, onRemove, onUpdate }: OrderProps): JSX.Element {
  const [edit, setEdit] = React.useState(false);
  const [status, setStatus] = React.useState(order.status);

  const handleRemove = (event: React.MouseEvent): void => {

    console.log(order.id);
    
  
    if (onRemove) {
      onRemove(order.id);
    }
  };

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStatus(event.target.value);
  };
  // const handleEditClick = (event: React.MouseEvent): void => {
  //   if (edit) {
  //     const newItem: Item = {
  //       ...item,
  //       name,
  //       price,
  //       img,
  //       description,
  //       category_id,
  //     };
  //     if (onUpdate) {
  //       onUpdate(newItem);
  //     }
  //     setEdit(false);
  //   } else {
  //     setEdit(true);
  //   }
  // };
console.log(order);

  return (
    <div>
      <tr>
        <td>{order.id}</td>
        <td>
          {order.OrderItems.map(
            (orderItem) =>
              `${orderItem.Item.name} - ${orderItem.quantity} шт., `
          )}
        </td>
        <td>{order.contact}</td>
        <td>
          {order.status}
          
        </td>
        <td>{order.createdAt}</td>
        <td>
          <button type="button" onClick={handleRemove}>удалить</button>
        </td>
      </tr>
    </div>
  );
}

export default OrderView;
