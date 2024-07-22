// import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
