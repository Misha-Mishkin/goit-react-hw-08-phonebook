import { changeFilter } from '../../redux/contactsAPI/filter-slice';
import { getFilter } from '../../redux/contactsAPI/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ title }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.text}>{title}</p>
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

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
