import { Puff } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <Puff
        heigth="100"
        width="100"
        color="#0c9333"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}
