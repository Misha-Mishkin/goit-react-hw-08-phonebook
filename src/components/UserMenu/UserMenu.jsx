import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/authAPI/auth-selectors';
import authOperations from '../../redux/authAPI/auth-operation';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <span className={s.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
