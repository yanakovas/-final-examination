import { useSelector } from 'react-redux';
import ItemView from '../ItemView/ItemView';
import { selectItems, selectLoaderror, selectUpdateError } from '../selectors';
import styles from './styles.module.css';
import * as api from '../api';
import Item, { ItemId } from '../types/Item';
import { itemDeleted, itemUpdated } from '../itemsSlice';
import { useAppDispatch } from '../../../store';
import React, { useMemo, useState } from 'react';

function ItemsPage(): JSX.Element {
  const items = useSelector(selectItems);
  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();
  const [startItems, setStartItems] = React.useState('');
  const [categoryId, setCategoryId] = React.useState(0);
  const [sorting, setSorting] = React.useState('');

  const finalItems = useMemo(() => {
    if (sorting === 'priceUp') {
      return [...items].sort((a, b) => a.price - b.price);
    } else if (sorting === 'priceDown') {
      return [...items].sort((a, b) => b.price - a.price);
    } else if (categoryId > 0) {
      return [...items].filter((i) => i.category_id === Number(categoryId));
    } else if (startItems === 'startItems') {
      return items;
    }
    return items;
  }, [items, sorting, categoryId, startItems]);

  const handleSortedUp = (event: React.MouseEvent): void => {
    setSorting('priceUp');
  };

  const handleSortedDown = (event: React.MouseEvent): void => {
    setSorting('priceDown');
  };

  const handleSortedCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSorting('');
    setStartItems('startItems');
    setCategoryId(Number(event.target.value));
  };

  const handleSetDefault = (event: React.MouseEvent): void => {
    setSorting('');
    setCategoryId(0);
    setStartItems('startItems');
  };

  const handleItemRemove = (id: ItemId): void => {
    dispatch(itemDeleted(id));
  };

  const handleItemUpdate = (item: Item): void => {
    dispatch(itemUpdated(item));
  };

  return (
    <div>
      <div className={styles.sort}>
        <p>Сортировать по</p>
        <button
          className={styles.btnDelet}
          type="button"
          onClick={handleSortedUp}
        >
          Возрастанию цены
        </button>{' '}
        <button
          className={styles.btnDelet}
          type="button"
          onClick={handleSortedDown}
        >
          Убыванию цены
        </button>{' '}
        <button
          className={styles.btnDelet}
          type="button"
          onClick={handleSetDefault}
        >
          Сбросить фильтры
        </button>{' '}
        <select className={styles.input} onChange={handleSortedCategory}>
          <option value="1">Категория 1</option>
          <option value="2">Категория 2</option>
          <option value="3">Категория 3</option>
          <option value="4">Категория 4</option>
        </select>
      </div>

      <div className={styles.cards}>
        {loadError ? (
          <b>{loadError}</b>
        ) : (
          finalItems.map((item) => (
            <ItemView
              key={item.id}
              item={item}
              onRemove={handleItemRemove}
              onUpdate={handleItemUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
