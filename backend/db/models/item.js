const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, OrderItem , Order}) {
      Item.belongsTo(Category, { foreignKey: 'category_id' });
      Item.OrderItems = Item.hasMany(OrderItem, { foreignKey: 'item_id' });
      // Item.Orders = Item.belongsToMany(Order, {
      //   through: OrderItem,
      //   foreignKey: 'item_id',
      //   otherKey: 'order_id',
      //   as: 'ordered',
      // })
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
