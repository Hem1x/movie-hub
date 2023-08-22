import React from 'react';
import styles from './SideBar.module.scss';
import { home, logo, search } from '../../assets';

const SideBar: React.FC = () => (
  <div className={styles.nav}>
    <img className={styles.logo} src={logo} alt="logo" />
    <img className={styles.navItem} src={home} alt="home" />
    <img className={styles.navItem} src={search} alt="search" />
  </div>
);

export default SideBar;
