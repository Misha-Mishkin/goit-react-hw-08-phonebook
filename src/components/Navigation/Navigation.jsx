import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import authSelectors from '../../redux/authAPI/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.nav_item : s.active)}
      >
        Home page
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.nav_item : s.active)}
        >
          Contacts
        </NavLink>
      )}
      <Outlet />
    </nav>
  );
}
