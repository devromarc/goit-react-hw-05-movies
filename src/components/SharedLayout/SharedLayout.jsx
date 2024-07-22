import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
// import { Footer } from '../Footer/Footer';
import css from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
