import { useEffect, useState } from 'react';
// import { MovieList } from '../../components/MovieList/MovieList';
import { getTrending } from '../../services/tmdb-api.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { MovieList } from 'components/MovieList/MovieList.jsx';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await getTrending();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.length === 0 ? (
        <Loader />
      ) : (
        <MovieList movies={trendingMovies} />
      )}
      {console.log(trendingMovies)}
    </div>
  );
};

export default HomePage;
