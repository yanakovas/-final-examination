import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Item, { ItemId } from "../types/Item";
import styles from "./styles.module.css";
import { selectUser } from "../../auth/selectors";
import React from "react";
import { selectUpdateError } from "../selectors";

type ItemProps = {
  item: Item;
  onRemove?: (itemId: ItemId) => void;
  onUpdate?: (newItem: Item) => void;
};

function ItemView({ item, onRemove, onUpdate }: ItemProps): JSX.Element {
  // const navigate = useNavigate();
  // const handleItemPageClick = (): void => {
  //   navigate(`/items/${item.id}`);
  // };
  const user = useSelector(selectUser);
  const updateError = useSelector(selectUpdateError);

  const [edit, setEdit] = React.useState(false);

  const [name, setName] = React.useState(item.name);
  const [price, setPrice] = React.useState(item.price);
  const [img, setImg] = React.useState(item.img);
  const [description, setDescription] = React.useState(item.description);
  const [category_id, setCategory_id] = React.useState(item.category_id);

  const handleRemove = (event: React.MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    if (onRemove) {
      onRemove(item.id);
    }
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPrice(Number(event.target.value));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value);
  };

  const handleImgChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setImg(event.target.value);
  };

  const handleCategory_id = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory_id(Number(event.target.value));
  };

  const handleEditClick = (event: React.MouseEvent): void => {
    if (edit) {
      const newItem: Item = {
        ...item,
        name,
        price,
        img,
        description,
        category_id,
      };
      if (onUpdate) {
        onUpdate(newItem);
      }
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.pic}>
        {edit ? (
          <div className={styles.editBox} style={{ marginBottom: 10 }}>
            <div className={styles.inputBox}>
              <label htmlFor="name-input" className={styles.formLabel}>
                Название товара
              </label>
              <input
                required
                type="text"
                className={styles.input}
                id="name-input"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="price-input" className={styles.formLabel}>
                Цена товара
              </label>
              <input
                required
                type="number"
                className={styles.input}
                id="price-input"
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="description-input" className={styles.formLabel}>
                Описание товара
              </label>
              <input
                required
                type="text"
                className={styles.input}
                id="description-input"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="img-input" className={styles.formLabel}>
                Изображение
              </label>
              <input
                required
                type="text"
                className={styles.input}
                id="img-input"
                name="img"
                value={img}
                onChange={handleImgChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label className={styles.formLabel}>
                Выберите категорию товара
              </label>
              <select className={styles.input} onChange={handleCategory_id}>
                <option value="1">Категория 1</option>
                <option value="2">Категория 2</option>
                <option value="3">Категория 3</option>
                <option value="4">Категория 4</option>
              </select>
            </div>
          </div>
        ) : (
          <>
            <img src={item.img} className={styles.img} alt="..." />
            <div className={styles.name}>
              <Link to={`/items/${item.id}`} style={{ fontSize: "24px" }}>
                {item.name}
              </Link>
              <div className={styles.price}>
                <p>{item.price} р.</p>
              </div>
            </div>
          </>
        )}
        <div className={styles.btnBox}>
          {user && !edit && (
            <button type="button" onClick={handleRemove} className={styles.btn}>
              Удалить
            </button>
          )}
          {user && (
            <button className={styles.btn} onClick={handleEditClick}>
              {edit ? "Изменить товар" : "Редактировать"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemView;
