import './HomePage.css';
import Header from '../../components/organisms/Header/Header';
import BottomNav from '../../components/organisms/BottomNav/BottomNav';
import MovieCard from '../../components/molecules/MovieCard/MovieCard'; 
import { getPopularMovies } from '../../services/tmdb';
import Spinner from '../../components/atoms/Spinner/Spinner';
import {useMovies} from '../../hooks/useMovies';



function HomePage() {
    const { movies, loading, error } = useMovies(getPopularMovies);

 return (
  <div className="home-page">
    <Header />
    {loading && <Spinner />}
    {error && <p>Error al cargar las películas</p>}
    <main className="home-page__content">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
          
      ))}
    </main>
    <BottomNav activeTab="home" />
  </div>
);  
}
export default HomePage;