import { renderHook, waitFor } from '@testing-library/react';
import { useMovies } from './useMovies';

describe('useMovies', () => {

  // Scenario: Mostrar estado de carga inicial
  // Given the user enters the exploration section
  // When the system is still retrieving the first set of movies
  // Then the system should display a loading state
  it('empieza con loading true', () => {
    const fetchFn = () => new Promise(() => {});
    const { result } = renderHook(() => useMovies(fetchFn));
    expect(result.current.loading).toBe(true);
  });

  // Scenario: Mostrar el listado inicial de películas
  // Given the user enters the exploration section
  // When the system retrieves the first set of movies
  // Then the system should display each movie with title, poster, year, and public rating
  it('carga películas correctamente', async () => {
    const mockMovies = [{ id: 1, title: 'Inception' }];
    const fetchFn = () => Promise.resolve(mockMovies);
    const { result } = renderHook(() => useMovies(fetchFn));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movies).toEqual(mockMovies);
  });

  // Scenario: Mostrar error cuando falla la carga de películas
  // Given the user enters the exploration section
  // When the movie service fails
  // Then the system should display a clear error message
  it('gestiona errores correctamente', async () => {
    const fetchFn = () => Promise.reject(new Error('Error de red'));
    const { result } = renderHook(() => useMovies(fetchFn));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Error de red');
  });

});