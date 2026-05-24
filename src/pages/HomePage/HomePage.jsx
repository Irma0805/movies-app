import './HomePage.css';
import Header from '../../components/organisms/Header/Header';
import BottomNav from '../../components/organisms/BottomNav/BottomNav';
import MovieCard from '../../components/molecules/MovieCard/MovieCard'; 
import Button from '../../components/atoms/Button/Button';
import Spinner from '../../components/atoms/Spinner/Spinner';
import {useMovies} from '../../hooks/useMovies';
import { getPopularMovies, IMAGE_BASE_URL } from '../../services/tmdb';


function HomePage() {
    const { movies, loading, error } = useMovies(getPopularMovies);

 return (
  <div className="home-page">
    <Header />
    {loading && <Spinner />}
    {error && <p>Error al cargar las películas</p>}
    <main className="home-page__content">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={`${IMAGE_BASE_URL}${movie.poster_path}`}
          year={movie.release_date?.split('-')[0]}
          genre={movie.genre_ids[0]}
          rating={Math.round(movie.vote_average * 10) / 10}
          isFavorite={false}
        />
      ))}
    </main>
    <BottomNav activeTab="home" />
  </div>
);  
}
export default HomePage;