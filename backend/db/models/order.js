const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ OrderItem, Item }) {
      Order.OrderItems = Order.hasMany(OrderItem, { foreignKey: 'order_id' });
      // Order.Items = Order.belongsToMany(Item, {
      //   through: OrderItem,
      //   foreignKey: 'order_id',
      //   otherKey: 'item_id',
      //   as: 'items',
      // })
    }
  }
  Order.init(
    {
      status: {
        type: DataTypes.TEXT,
        defaultValue: 'ozhidanie',
      },
      contact: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
