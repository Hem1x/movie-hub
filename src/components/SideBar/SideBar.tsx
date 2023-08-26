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
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUser } from '../../store/features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

const SideBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth } = useAuth();

  const { email } = useAppSelector((state) => state.users);
  const username = email?.split('@')[0].slice(0, 2).toUpperCase();

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeUser);
    signOut(auth);
    window.location.reload();
    navigate('/login');
  };

  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={logo} alt="logo" />

      {isAuth && (
        <>
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
        </>
      )}

      {isAuth && (
        <div className={styles.userBlock}>
          <div className={styles.userName}>
            {' '}
            <span>{username}</span>
          </div>
          <button onClick={logout} className={styles.userExit}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
