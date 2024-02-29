import styles from "./styles.module.css";
import balconTable from "./IMG_0194.jpg"
import sink from "./IMG_0148.jpg"
import kitchenTable from "./IMG_0150.jpg"
import { Link, useNavigate } from "react-router-dom";

import ARRAYBACK from './ARRAYBACK.svg'

function ContactsPage(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className={styles.contact}>
      <div>
        <h2>Как совершить покупку</h2>
        <p>
          Вы выбрали понравившиеся Вам товары, добавили их в корзину и
          задумались: а как же я олачу свой заказ и получу его?{" "}
        </p>{" "}
        <p>Мы отправляем заказы по России и мира, насколько это возможно.</p>
        <p>
          Для оформления заказа Вам нужно указать в поле ввода (на страничке
          "корзина") свои контактные данные и предпочтительный способ связи
          (например, сообщения в мессенджере "Телеграм"), и наш менеджер
          свяжется с Вами втечние рабочего дня. Предпочтительную курьерскую
          службу или службу перевозки можно будет обсудить с курьером, который
          постарается учесть ваши пожелания!
        </p>
      </div>
      <div className={styles.contacts}>
      <div className={styles.contactInfo}>
        <h2>Как с нами связаться:</h2>
        <span>instagram: @wearejurgensons</span>
        <br /><br />
        <span>телефон: +79216476669</span>
        <br />
        <br />
        <span>адрес: Санкт-Петербург, 195196, ул. Стахановцев, д. 9Б, 11</span>
        <br /><br />
        <span>email: wearejurgensons@gmail.com</span>
        <br /><br />
        <span>telegram: @wearejurgensons</span>
      </div>
        <div className={styles.imagebox}>
          <img className={styles.img} src={balconTable} alt="bottle" />

          <img className={styles.img} src={sink} alt="sink" />

          <img className={styles.img} src={kitchenTable} alt="kitchenTable" />
        </div>
      </div>
      <div className={styles.linkBack}>
        <Link to="#" onFocus={() => navigate(-1)}>
            <img src={ARRAYBACK} alt="array back" />
          </Link>
          </div>
    </div>
  );
}

export default ContactsPage;
