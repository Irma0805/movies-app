import './MoviePoster.css';

function MoviePoster({ src, alt }) {
  return (
    <img 
      className="movie-poster"
      src={src}
      alt={alt}
    />
  );
}

export default MoviePoster;