require('dotenv').config();
const express = require('express');
const path = require('path');
const expressConfig = require('./config/express');
const itemsRouter = require('./routes/items.routes');
const categoriesRouter = require('./routes/categories.routes');
const authRouter = require('./routes/auth.routes');
const cartRouter = require('./routes/cart.routes');
const ordersRouter = require('./routes/orders.routes');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/items', itemsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/auth', authRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at ${PORT}/`));
