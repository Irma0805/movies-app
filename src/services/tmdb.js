const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY  = import.meta.env.VITE_TMDB_KEY;

const query = new URLSearchParams({
  api_key: API_KEY,
  language: 'es-ES',
  ...params
});