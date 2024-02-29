import styles from './styles.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.mainContainer}>
        <div className={styles.iconContainer}></div>
        <div className={styles.contactInfo}>
          <div className={styles.contactUs}>
            <h2>Как с нами связаться:</h2>
            <span>телефон: +79216476669</span>
            <span>
              адрес: Санкт-Петербург, 195196, ул. Стахановцев, д. 9Б, 11
            </span>
          </div>
          <div className={styles.contact}>
            <span>email: wearejurgensons@gmail.com</span>
            <span>instagram: @wearejurgensons</span>
            <span>telegram: @wearejurgensons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
