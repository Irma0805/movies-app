import './MovieCard.css';
import MoviePoster from '../../atoms/MoviePoster/MoviePoster';
import Rating from '../../atoms/Rating/Rating';
import Badge from '../../atoms/Badge/Badge';

function MovieCard({ title, poster, year, genre, rating, isFavorite }) {
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <MoviePoster src={poster} alt={title} />
        <i className={isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
      </div>
      <h3>{title}</h3>
      <Badge label={year} />
      <Badge label={genre} />
      <Rating value={rating} />
    </div>
  );
}

export default MovieCard;