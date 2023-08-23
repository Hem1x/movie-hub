import React from 'react';
import styles from './SideBar.module.scss';
import { home, logo, search } from '../../assets';
import { NavLink } from 'react-router-dom';

const SideBar: React.FC = () => (
  <div className={styles.nav}>
    <img className={styles.logo} src={logo} alt="logo" />
    <NavLink to="/">
      <img className={styles.navItem} src={home} alt="home" />
    </NavLink>

    <img className={styles.navItem} src={search} alt="search" />
  </div>
);

export default SideBar;
