import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';


export default function AuthNav() {
  return (
    <div className={s.auth_nav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.auth_nav_item : s.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.auth_nav_item : s.active)}
      >
        Login
      </NavLink>
    </div>
  );
}
