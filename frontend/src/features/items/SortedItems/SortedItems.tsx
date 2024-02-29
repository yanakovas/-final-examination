import { useSelector } from "react-redux";
import { memo, useMemo } from 'react';
import ItemView from "../ItemView/ItemView";
import { selectItems, selectLoaderror } from "../selectors";
import styles from "./styles.module.css";
// import * as api from '../api';
import { useNavigate, useParams } from "react-router-dom";

function SortedItems(): JSX.Element {
  const items = useSelector(selectItems);
  const { id } = useParams();
  const loadError = useSelector(selectLoaderror);
  const navigate = useNavigate()

const sortedItems = useMemo(() => {
return items.filter((i) => i.category_id === Number(id));
}, [id, items])

  return (
    <div>
              <div className={styles.btnBox}>
          <button className={styles.btn} onClick={() => navigate('/items')}>Все товары</button></div>
      <div className={styles.cards}>

        {loadError ? (
          <b>{loadError}</b>
        ) : (
          sortedItems.map((item) => <ItemView 
          key={item.id} 
          item={item}
          />)
        )}
      </div>

    </div>
  );
}

export default memo(SortedItems);
