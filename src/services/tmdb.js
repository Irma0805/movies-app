const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_KEY;
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


async function fetchFromTMDB(endpoint, params = {}) {
  const query = new URLSearchParams({
    api_key: API_KEY,
    language: 'es-ES',
    ...params
  });

  try {
    const response = await fetch(`${BASE_URL}${endpoint}?${query}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    throw error;
  }
}

export function getPopularMovies(page = 1) {
  return fetchFromTMDB('/movie/popular', { page });
}

export function searchMovies(query, page = 1) {
  return fetchFromTMDB('/search/movie', { query, page });
}

export function getGenres() {
  return fetchFromTMDB('/genre/movie/list');
} 
