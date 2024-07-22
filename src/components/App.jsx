import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
// import HomePage from 'Pages/Home/HomePage';

// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));
const HomePage = lazy(() => import('../Pages/Home/HomePage'));
// const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
// const Movies = lazy(() => import('Pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
