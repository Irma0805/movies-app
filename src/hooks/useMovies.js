import {useState, useEffect} from 'react';

export function useMovies(fetchFn, deps = []) {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchFn();
      setMovies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchMovies();
}, deps);

return { movies, loading, error };
}