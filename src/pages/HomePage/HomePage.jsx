import './HomePage.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import MovieCard from '../../components/molecules/MovieCard/MovieCard'; 
import { getPopularMovies } from '../../services/tmdb';
import Spinner from '../../components/atoms/Spinner/Spinner';
import {useMovies} from '../../hooks/useMovies';



function HomePage() {
    const { movies, loading, error } = useMovies(getPopularMovies);

 return (
  <PageLayout>
    {loading && <Spinner />}
    {error && <p>Error al cargar las películas</p>}
    <main className="home-page__content">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
          
      ))}
    </main>
  </PageLayout>
);  
}
export default HomePage;