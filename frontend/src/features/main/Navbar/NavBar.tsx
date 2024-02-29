import React, { memo, useState } from 'react';
import styles from './styles.module.css';
// import heartPic from './img/HeartStraight.svg';
import searchPic from './img/LOOP.svg';
import cartPic from './img/BAG.svg';
import userPic from './img/HOUSE.svg';
import logo from './img/LOGOJurgensons.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../auth/selectors';
import * as api from '../../auth/api';
import { logoutSuccess } from '../../auth/authSlice';
import { useAppDispatch } from '../../../store';

function NavBar(): JSX.Element {
  const user = useSelector(selectUser);

  const navigate = useNavigate();
  const dispatchApp = useAppDispatch();

  const [statusSearch, setStatusSearch] = useState(false);
  const [text, setText] = useState('');

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatchApp(logoutSuccess());
    navigate('/');
  };

  const handleSearchClick = (): void => {
    setStatusSearch(true);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleSearchSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    setStatusSearch(false);
    navigate(`/search?q=${text}`);
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.header}>
        <Link to="/" style={{ fontSize: '24px' }}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <div className={styles.buttoncontainer}>
          <div className={styles.titlecontainer}>
            {user && <div>Привет, {user.name}</div>}
            <Link className={styles.link} to="/items">
              Каталог
            </Link>

            {!user && (
              <Link className={styles.link} to="/contacts">
                Доставка
              </Link>
            )}
          </div>

          {!statusSearch ? (
            <Link to="/items" onClick={handleSearchClick}>
              <img src={searchPic} alt="searchPic" />
            </Link>
          ) : (
            <form onSubmit={handleSearchSubmit}>
              <input
                className={styles.input}
                value={text}
                onChange={handleSearchChange}
              />
              <button className={styles.btnDelet} type="submit">
                <img src={searchPic} alt="searchPic" />
              </button>
            </form>
          )}

          {!user && (
            <Link to="/cart">
              <img src={cartPic} alt="cartPic" />
            </Link>
          )}

          {user && (
            <Link to="/profile">
              <img src={userPic} alt="userPic" />
            </Link>
          )}
          {user && (
            <a href="#" role="button" tabIndex={0} onClick={handleLogout}>
              Выйти
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}

export default memo(NavBar);
