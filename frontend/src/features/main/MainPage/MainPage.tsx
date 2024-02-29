import ArticleView from '../../articles/Article3View';
import AboutUsView from './AboutUs/AboutUsView';
import CategoriesPage from '../../categories/CategoriesPage/CategoriesPage';
import styles from './styles.module.css';
import starButton from './img/star_button.svg';
import news1 from './img/news1.svg';
import news2 from './img/news2.svg';
import news3 from './img/news3.svg';
import ARRAYUP from './img/ARRAYUP.svg';
import upButton from './img/up.png';

import videoPic from './img/IMG_7272 1 1.svg'; // пока растянутое видео не готово - img заглушка
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function MainPage(): JSX.Element {
  return (
    <div id="links">
      {/* видео - блок */}
      <div>
        <div className={styles.video_container}>
          {/* <img src={videoPic} alt="video" /> */}
          <video autoPlay loop muted>
            <source src={require('./img/IMG_9113.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* блок - основной страницы */}
      <div className={styles.main_container}>
        <CategoriesPage />
        <div className={styles.links_container}>
          {' '}
          {/* может быть потом вынести блок в отдельную view */}
          <div className={styles.starButton}>
            <Link to="/contacts">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>контакты</p>
            </Link>
          </div>
          <div className={styles.starButton}>
            <Link to="/contacts">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>условия доставки</p>
            </Link>
          </div>
          <div className={styles.starButton}>
            <a href="/cart">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>корзина</p>
            </a>
          </div>
        </div>

        <AboutUsView />

        {/* новости */}
        <p className={styles.title}>Наши статьи</p>
        <div className={styles.newsContainer}>
          <div className={styles.leftPart}>
            <a href="">
              <div className={styles.newsCard1}>
                <img src={news1} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <Link to="/article1" className={styles.text}>
                    Немного о фурошиках
                  </Link>
                </div>
              </div>
            </a>
            <a href="">
              <div className={styles.newsCard2}>
                <img src={news2} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <Link to="/article2" className={styles.text}>
                    Немного о рецептах
                  </Link>
                </div>
              </div>
            </a>
          </div>

          <div className={styles.rightPart}>
            <a href="">
              <div className={styles.newsCard3}>
                <img src={news3} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <Link to="/article3" className={styles.text}>
                    Немного о керамике
                  </Link>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.upButton}>
          <a href="#links">
            <img src={ARRAYUP} alt="array up" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
