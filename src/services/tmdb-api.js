import axios from 'axios';
const API_KEY = '6185b0bb605a39cc0b9b44e58909054a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// /trending/get-trending a list of the most popular movies for today to create a collection on the home page page.
export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// /search/search-movies keyword search for a movie on the movies page.
export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};

// /movies/get-movie-details Request full movie info for the movie page.
export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// /movies/get-movie-credits Request cast info for the movie page.
export const getMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

// /movies/get-movie-reviews requesting reviews for the movie page.
export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
