import Spinner from './components/atoms/Spinner/Spinner';
import Rating from './components/atoms/Rating/Rating';
import Badge from './components/atoms/Badge/Badge';
import Button from './components/atoms/Button/Button';
import MoviePoster from './components/atoms/MoviePoster/MoviePoster';
import MovieCard from './components/molecules/MovieCard/MovieCard';

function App() {
  return (
    <div>
      <Spinner />
      <Rating value={8.4} />
      <Badge label="2024" />
      <Button label="Todos" isActive={true} />
      <MovieCard 
        title="Inception"
        poster="https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
        year={2010}
        genre="Sci-Fi"
        rating={8.4}
        isFavorite={false}
      />
    </div>
  );
}

export default App;
