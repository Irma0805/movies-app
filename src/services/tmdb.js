const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_KEY;
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : null,
    year: new Date(movie.release_date).getFullYear(),
    rating: Math.round(movie.vote_average * 10) / 10,
    genre_ids: movie.genre_ids,
  };
}

async function fetchFromTMDB(endpoint, params = {}) {
  const query = new URLSearchParams({ api_key: API_KEY, language: 'es-ES', ...params });
  const response = await fetch(`${BASE_URL}${endpoint}?${query}`);
  if (!response.ok) throw new Error(`Error ${response.status}`);
  return response.json();
}

export async function getPopularMovies(page = 1) {
 const data = await fetchFromTMDB('/movie/popular', { page });
  return data.results.map(normalizeMovie);
}

export async function searchMovies(query, page = 1) {
  const data = await fetchFromTMDB('/search/movie', { query, page });
  return data.results.map(normalizeMovie);
}

export function getGenres() {
  return fetchFromTMDB('/genre/movie/list');
} 
