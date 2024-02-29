require('dotenv').config();
const { sequelize } = require('./models');

// вносит изменения в существующие таблицы
// либо создаёт их если их нет
// ВНИМАНИЕ! НЕ ИСПОЛЬЗОВАТЬ В ПРОДАКШЕНЕ.
// ВЫ МОЖЕТЕ ПОТЕРЯТЬ ДАННЫЕ, КОТОРЫЕ УЖЕ ЕСТЬ В ВАШИХ ТАБЛИЦАХ
async function main() {
  await sequelize.sync({ alter: true });
  await sequelize.close();
}

main();
