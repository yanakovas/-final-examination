import Category from "../types/Category";
import styles from "./styles.module.css";


type CategoryProps = {
  category: Category;
};

function CategoryView({ category }: CategoryProps): JSX.Element {
  return (
    
      <div className={styles.pic}>
        <img src={category.img} className="card-img" alt="..." />
        <div className={styles.name}>
        <p className={styles.text}>{category.name}</p>
        </div>
        
      </div>
    
  );
}

export default CategoryView;
