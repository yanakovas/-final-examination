const ordersRouter = require('express').Router();

const { Order, OrderItem } = require('../db/models');

ordersRouter.get('/', async (req, res) => {
  try {
    // const orders = await Order.findAll({
    //   order: [
    //     ['createdAt', 'DESC'],
    //     ['id', 'DESC'],
    //   ],
    // });
    // const orderItems = await OrderItem.findAll({
    //   order: [
    //     ['createdAt', 'DESC'],
    //     ['id', 'DESC'],
    //   ],
    //   include: [ {
    //     model: Item,
    //     required: true
    //   },
    //   {
    //     model: Order,
    //     required: true
    //   }],
    //   raw:true,
    // });
    const orders = await Order.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
      include: [{
        association: Order.OrderItems,
        include: OrderItem.Item,
      }],
      // raw: true,
    });

    console.log(orders);
    res.json(orders)
  } catch (error) {
    console.error(error)
    res.status(501).json({ error: 'ошибка БД при загрузке заказов на странцу' })
  }
});


ordersRouter.delete('/:id', async (req, res) => {
  try {
    // удаляем задачу с заданным id
    const { id } = req.params
    const removedCount = await Order.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(id),
      },

    });


    if (removedCount === 0) {
      res.status(404).json({ success: false, message: 'Нет такого заказа' });
    } else {
      // res.json({ success: true });
      res.json(Number(id))
    }
  } catch (error) {
    console.error(error)
    res.status(501).json({ error: 'ошибка БД' })
  }
});

ordersRouter.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(Number(req.params.id));
    const { status } = req.body;

    if (!order) {
      res.status(404).json({ success: false, message: 'Нет такого заказа' });
      return;
    }
    order.status = status;
    order.save();
    res.json({ success: true })
  } catch (error) {
    res.status(501).json({ error: 'ошибка БД при редактировании статуса заказа' })
    console.error(error)
  }
})

module.exports = ordersRouter;