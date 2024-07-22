import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../Pages/Home/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
// MovieDetailsPage
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetailsPage/MovieDetailsPage')
);
const CastList = lazy(() => import('../components/CastList/CastList'));
const ReviewList = lazy(() => import('../components/ReviewList/ReviewList'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
