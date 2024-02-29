import styles from "./styles.module.css";
import { useAppDispatch } from "../../store";
// import ItemView from "../items/ItemView/ItemView";
// import { selectItems, selectLoaderror } from "../items/selectors";
import React from "react";
import { itemCreated } from "../items/itemsSlice";
import { useNavigate } from "react-router-dom";
import OrdersView from "../orders/order/OrdersView";

import { useSelector } from "react-redux";
import { selectUser } from "../auth/selectors";

function ProfilePage(): JSX.Element {
  // const items = useSelector(selectItems);
  // const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [edit, setEdit] = React.useState(false);

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(Number(""));
  const [img, setImg] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category_id, setCategory_id] = React.useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      itemCreated({
        name,
        price,
        img,
        description,
        category_id,
        id: 0,
      })
    );
    setName("");
    setPrice(Number(""));
    setImg("");
    setDescription("");
    navigate("/items");
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
    setEdit(true);
  };

  if (!user) {
    return (
      <div className={styles.nonUserBox}>
        <p className={styles.title}>
          Авторизуйтесь чтобы проссматривать профиль администратора
        </p>
      </div>
    );
  }

  return (
    <div className={styles.maincontainer}>
      <p className={styles.mainTitle}>Профиль администратора</p>

      <div className={styles.correctItemsBox}>
        <p className={styles.title}>Редактирование товаров</p>
        {edit ? (
          <div className={styles.newItemBox}>
            <p className={styles.title}>Создание нового товара</p>
            <form className={styles.inputGroup} onSubmit={handleSubmit}>
              <div className={styles.inputBox}>
                <label htmlFor="name-input" className={styles.formLabel}>
                  Название товара
                </label>
                <input
                  placeholder="введите название"
                  autoComplete="off"
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
                  placeholder="введите цену товара"
                  autoComplete="off"
                  required
                  type="text"
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
                  placeholder="введите описание"
                  autoComplete="off"
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
                  placeholder="URL изображения"
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
              <div className={styles.inputBox}>
                <button type="submit" className={styles.btn}>
                  Создать товар
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <button type="button" className={styles.mainBtn} onClick={handleEditClick}>
              Создать новый товар
            </button>
          </div>
        )}
        <br />
        <div>
          <button className={styles.mainBtn} onClick={() => navigate("/items")}>
            Редактировать товары
          </button>
        </div>
      </div>
      <br />
      <div>
        <p className={styles.title}>Сформированные заказы</p>
        <OrdersView/>
      </div>
    </div>
  );
}

export default ProfilePage;
