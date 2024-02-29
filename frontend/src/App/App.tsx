import { memo, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import './App.css';

import NavBar from '../features/main/Navbar/NavBar';
import ItemsPage from '../features/items/ItemsPage/ItemsPage';

import MainPage from '../features/main/MainPage/MainPage';
import ContactsPage from '../features/contacts/ContactsPage';
import AuthPage from '../features/auth/authpage/authPage';
import ProfilePage from '../features/profile/ProfilePage';

import { loadCategories } from '../features/categories/categoriesSlice';

import { loadItems } from '../features/items/itemsSlice';
import { userChecked } from '../features/auth/authSlice';
import { selectAuthChecked } from '../features/auth/selectors';

import AboutPage from '../features/about/AboutPage';

//import ItemPage from '../features/items/ItemPage.tsx/ItemPage';
import SortedItems from '../features/items/SortedItems/SortedItems';

import ItemPage from '../features/items/ItemPage/ItemPage';
import CartPage from '../features/cart/cartPage/CartPage';
import Search from '../features/items/Search/Search';
import Footer from '../features/main/Footer/Footer';
import ArticleView from '../features/articles/Article1View';
import Article2View from '../features/articles/Article2View';
import Article1View from '../features/articles/Article1View';
import Article3View from '../features/articles/Article3View';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const authChecked = useSelector(selectAuthChecked);

  useEffect(() => {
    dispatch(loadItems());
    dispatch(loadCategories());
    dispatch(userChecked());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AuthPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        <Route path="/categories/:id" element={<SortedItems />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article1" element={<Article1View />} />
        <Route path="/article2" element={<Article2View />} />
        <Route path="/article3" element={<Article3View />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default memo(App);
