import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
// import { Footer } from '../Footer/Footer';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
