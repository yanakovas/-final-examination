const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate(
      [
        {
          name: 'admin',
          password: await bcrypt.hash('admin', 10),
          isAdmin: true,
        },
        {
          name: 'Vasya',
          password: await bcrypt.hash('12345', 10),
          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
