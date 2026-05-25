import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import './MovieCard.css';
import MoviePoster from '../../atoms/MoviePoster/MoviePoster';
import Rating from '../../atoms/Rating/Rating';
import Badge from '../../atoms/Badge/Badge';

function MovieCard({ movie }) {
  const { favorites, toggleFavorite, genres } = useContext(FavoritesContext);
  const genre = genres.find(g => g.id === movie.genre_ids[0]);
  const { id, title, poster, year, rating } = movie;
  const isFavorite = favorites.some(m => m.id === id);

  function handleToggle(e) {
    e.stopPropagation();
    toggleFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <MoviePoster src={poster} alt={title} />
        <i
          className={isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
          onClick={handleToggle}
        />
      </div>
      <h3>{title}</h3>
      <div className="movie-card__info">
        <div className="movie-card__meta">
          <Badge label={year} />
          <span className="movie-card__dot">·</span>
          <Badge label={genre?.name} />
        </div>
        <Rating value={rating} />
      </div>
    </div>
  );
}

export default MovieCard;