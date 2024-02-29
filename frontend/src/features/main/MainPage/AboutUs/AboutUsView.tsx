import styles from "./styles.module.css";
import platokImg from "./img/platok.svg";
import foto1 from "./img/foto1.svg";
import foto2 from "./img/foto2.svg";
import foto3 from "./img/foto3.svg";

function AboutUsView(): JSX.Element {
  return (
    <div id="aboutUs" className={styles.main_container}>
      <div className={styles.left_container}>
        <div className={styles.text_container}>
          <p className={styles.title}>О нас</p>
          <p className={styles.text}>
            Мы- семья Юргенсон, дышим одними мечтами и планами, но живем в
            разных городах. Когда имеешь в распоряжении такую роскошь, как
            каждодневное общение с родными - не ценишь этого подарка судьбы.
            Лишившись же этого- осознаёшь, насколько быстро бежит время. На
            самом деле для счастья иногда нужно гораздо меньше, чем кажется-
            домашний уют и близкие рядом. Расстояние, разделяющее нас ещё ярче
            выявило потребность в близости, семейности, совместном
            времяпрепровождении. Эти думы положили начало нашему семейному
            бренду JURGENSØNS, названному в честь фамилии нашей семьи.
          </p>
        </div>
        <img className={styles.platokImg} src={platokImg} alt="foto" />
      </div>
      {/* -------- */}
      <div className={styles.right_container}>
        <div className={styles.text_container}>
          <p className={styles.right_title}>Наша команда</p>
          <div className={styles.fotoBox}>
            <div className={styles.personBox}>
              <img src={foto1} alt="foto" />
              <p className={styles.names}>Маша</p>
            </div>
            <div className={styles.personBox}>
              <img src={foto2} alt="foto" />
              <p className={styles.names}>Митя</p>
            </div>
            <div className={styles.personBox}>
              <img src={foto3} alt="foto" />
              <p className={styles.names}>Маша</p>
            </div>
          </div>
        </div>
        <img className={styles.platokImgRight} src={platokImg} alt="foto" />
      </div>
    </div>
  );
}

export default AboutUsView;
