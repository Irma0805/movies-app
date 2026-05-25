import { useContext, useState } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import MovieCard from '../../components/molecules/MovieCard/MovieCard';
import './LikesPage.css';

function LikesPage() {
  const { favorites } = useContext(FavoritesContext);
  const [activeGenre, setActiveGenre] = useState('Todos');

  const genres = ['Todos', ...new Set(favorites.map(m => m.genre).filter(Boolean))];

  const filteredMovies = activeGenre === 'Todos'
    ? favorites
    : favorites.filter(m => m.genre === activeGenre);

  return (
    <main className="likes-page">
      <div className="likes-page__header">
        <h1 className="likes-page__title">Liked Movies</h1>
        <p className="likes-page__subtitle">
          You have {favorites.length} saved title{favorites.length !== 1 ? 's' : ''} in your library.
        </p>
      </div>

      {favorites.length > 0 && (
        <div className="likes-page__filters">
          {genres.map(genre => (
            <button
              key={genre}
              className={`filter-chip ${activeGenre === genre ? 'filter-chip--active' : ''}`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      {favorites.length === 0 && (
        <div className="likes-page__filters">
          {genreNames.map(genre => (
            <button
              key={genre}
              className={`filter-chip ${activeGenre === genre ? 'filter-chip--active' : ''}`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      {favorites.length === 0 && (
        <div className="likes-page__empty">
          <i className="fa-regular fa-heart likes-page__empty-icon" />
          <p>You haven't liked any movies yet.</p>
        </div>
      )}

      <div className="likes-page__grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default LikesPage;