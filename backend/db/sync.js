require('dotenv').config();
const { sequelize } = require('./models');

// создаёт новую таблицу если её нет в БД
// если таблица уже есть, то ничего не делает
async function main() {
  await sequelize.sync();
  await sequelize.close();
}

main();
