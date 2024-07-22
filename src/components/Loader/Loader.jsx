import { RiseLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return <RiseLoader className={css.loader} color="#020202" />;
};
