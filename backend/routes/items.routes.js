const itemsRouter = require('express').Router();

const { Item } = require('../db/models');

itemsRouter.get('/', async (req, res) => {
try {const items = await Item.findAll({
  order: [
    ['createdAt', 'DESC'],
    ['id', 'DESC'],
  ],
});
res.json(items)
} catch (error) {
    console.error(error)
    res.status(501).json({ error: 'ошибка БД при загрузке товаров на странцу'})
  }
});


itemsRouter.delete('/:id', async (req, res) => {
  try {
    // удаляем задачу с заданным id
    const removedCount = await Item.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(req.params.id),
      },
    });

    if (removedCount === 0) {
      res.status(404).json({ success: false, message: 'Нет такого продукта' });
    } else {
      // res.json({ success: true });
      res.json(req.params.id)
    }
  } catch (error) {
    console.error(error)
    res.status(501).json({ error: 'ошибка БД'})
  }
});

itemsRouter.post('/', async ( req, res ) => {
  try {
    const { name, price, img, description, category_id } = req.body
    if ( !name.trim() || !price || !img.trim() || !description.trim() ) {
      return res.status(422).json({ error: 'Заполните все поля' });
    }
    if ( typeof(req.body.price) !== "number" ) {
      return res.status(422).json( { error: "Цена должна быть числом"})
    }
  
    const newItem = await Item.create(
      {
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description,
        category_id: req.body.category_id,
          }
    );
  
    return res.status(201).json(newItem);
  } catch ( error) {
    res.status(501).json({error: 'ошибка БД при создании товара'})
    console.error(error)
  }
})

itemsRouter.put('/:id', async( req, res ) => {
  try {
     const item = await Item.findByPk(Number(req.params.id));
     const { name, price, img, description, category_id} = req.body;

     if (!item) {
      res.status(404).json({success: false, message: 'Нет такой задачи'});
      return;

     }  
     if ( !name.trim() || !price || !img.trim() || !description.trim() ) {
      return res.status(422).json({ error: 'Заполните все поля' });
    }   
     item.name = name,
     item.price = price,
     item.img = img,
     item.description = description,
     item.category_id = category_id
     item.save();
     res.json({ success: true})
  } catch (error) {
    res.status(501).json({error: 'ошибка БД при редактировании'})
    console.error(error)
  }
})

module.exports = itemsRouter;