const cartRouter = require('express').Router();

const { OrderItem, Order } = require('../db/models');

cartRouter.post('/order', async (req, res) => {
  try {
    const { cartItems, contact } = req.body;

    const order = await Order.create({
      contact,
    });

    await Promise.all(
      cartItems.map(
        async (cartItem) =>
          // eslint-disable-next-line no-return-await
          await OrderItem.create({
            item_id: cartItem.item.id,
            quantity: cartItem.quantity,
            order_id: order.id,
          })
      )
    );

    res.json({ success: true });
  } catch (error) {
    res.status(501).json({ error: 'ошибка записи в БД' });
  }
});

module.exports = cartRouter;
