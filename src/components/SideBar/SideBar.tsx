import React from 'react';
import styles from './SideBar.module.scss';
import {
  favorites,
  favoritesActive,
  home,
  homeActive,
  logo,
  search,
  searchActive,
} from '../../assets';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={logo} alt="logo" />
      <NavLink to="/">
        <img
          className={styles.navItem}
          src={location.pathname === '/' ? homeActive : home}
          alt="home"
        />
      </NavLink>

      <NavLink to="/search">
        <img
          className={styles.navItem}
          src={location.pathname.includes('/search') ? searchActive : search}
          alt="search"
        />
      </NavLink>

      <NavLink to="/favorites">
        <img
          className={styles.navItem}
          src={location.pathname.includes('/favorites') ? favoritesActive : favorites}
          alt="search"
        />
      </NavLink>
    </div>
  );
};

export default SideBar;
