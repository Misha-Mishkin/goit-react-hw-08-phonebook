import { changeFilter } from '../../redux/contactsAPI/filter-slice';
import { getFilter } from '../../redux/contactsAPI/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.text}></p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        className={s.input}
      ></input>
    </label>
  );
}
