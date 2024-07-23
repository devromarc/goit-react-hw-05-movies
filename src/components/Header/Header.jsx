import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the root route '/'
  };
  return (
    <header className={css.header}>
      <h1 onClick={handleLogoClick}>TMDB</h1>
      <nav className={css.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
