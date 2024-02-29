import styles from "./articles.module.css";
import ARRAYBACK from "./img/ARRAYBACK.svg";
// import furoshik2 from "./img/IMG_0095.jpg";
// import furoshik3 from "./img/61039BAE-CDA6-414D-8626-90F3BFA325A9.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Article1View(): JSX.Element {
  
  const navigate = useNavigate()
  return (
    <div>
      {/* <div className={styles.topImg}>
        
          <img className={styles.img1} src="https://media.istockphoto.com/id/1190917688/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D1%83%D0%BB%D0%B5%D0%B2%D0%BE%D0%B9-%D0%BE%D1%82%D1%85%D0%BE%D0%B4%D0%BE%D0%B2-%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA-%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0-%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%81%D1%82%D0%B8%D0%BB%D1%8F-%D1%84%D1%83%D1%80%D0%BE%D1%81%D0%B8%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=S8no-XR3R7imfRtRZs2R5xUeT8mvkf3bqh6IGkSorIk=" alt="фурошик" />
        
        </div> */}
      <div className={styles.text}>
        <h2>ЧТО ТАКОЕ ФУРОШИКИ</h2>
        <p>
          «Фурошики» – слово, которое переводится сочетанием «коврик для похода
          в баню». Он представлял собой отрез, который брали с собой в качестве
          подложки под ноги для переодевания и переноски купальных вещей. Со
          временем сфера применения фурошики расширилась. В ткань начали
          заворачивать другие бытовые предметы. В XX веке потребность в тканевых
          переносках пропала. Но фурошики не исчезло – его стали использовать
          для красивой упаковки подарков. Еще одно применение техники фурошики –
          декорирование предметов интерьера: ваз, цветочных горшков, настольных
          ламп и т. д.
        </p>
        <p>
          Размеры материала для упаковки подарка могут быть любыми.
          Предполагается, что в отрез должна поместиться как минимум одна длина
          упаковываемого предмета плюс еще некоторое количество ткани,
          необходимое для формирования красивого узелка или удобной «ручки» для
          переноски. Традиционно в Японии используются квадратные или
          прямоугольные отрезы, длины сторон которых соотносятся в пропорции 1 к
          2.{" "}
        </p>
        <p>
          Для фурошики можно брать любые ткани – и мягкие, и жесткие по
          структуре, в зависимости от того, какого эффекта вы планируете
          добиться. Для мелких предметов лучше выбирать тонкие, струящиеся,
          легко драпирующиеся полотна. Для более крупных – плотные,
          формоустойчивые, способные выдержать вес подарка.
        </p>
      </div>
      <div className={styles.images}>
        
          <img className={styles.img2} src="https://redmeter.ru/upload/medialibrary/b47/versu5d5o47l8jdkg01nzjlpsxmrqicy.jpg"alt="фурошик" />
      
        </div>
        import ARRAYBACK from "./img/ARRAYBACK.svg";
        <div className={styles.linkBack}>
        <Link to="#" onFocus={() => navigate(-1)}>
            <img src={ARRAYBACK} alt="array back" />
          </Link>
          </div>
    </div>
  );
}

export default Article1View;
