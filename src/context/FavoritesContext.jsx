import { createContext, useState, useEffect} from 'react';
import { getGenres } from '../services/tmdb';

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
  async function fetchGenres() {
    const data = await getGenres();
    setGenres(data.genres);
  }
  fetchGenres();
}, []);

  function toggleFavorite(movie) {
    setFavorites(prev =>
      prev.some(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie]
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, genres }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;