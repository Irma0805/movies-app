import { normalizeMovie, IMAGE_BASE_URL } from './tmdb';

describe('normalizeMovie', () => {
    // Scenario: Obtener listado inicial de películas
// Given the integration service is available
// When the application requests the initial movie list
// Then the service should return a normalized collection of movies

  it('transforma correctamente los datos de TMDB', () => {
    const raw = {
      id: 1,
      title: 'Inception',
      poster_path: '/abc123.jpg',
      release_date: '2010-07-16',
      vote_average: 8.368,
      genre_ids: [28, 878]
    };

    const result = normalizeMovie(raw);

    expect(result.id).toBe(1);
    expect(result.title).toBe('Inception');
    expect(result.poster).toBe(`${IMAGE_BASE_URL}/abc123.jpg`);
    expect(result.year).toBe(2010);
    expect(result.rating).toBe(8.4);
    expect(result.genre_ids).toEqual([28, 878]);
  });

  // Scenario: Mostrar imagen por defecto cuando falta el póster
// Given the user enters the exploration section
// And a movie has no poster available
// When the list is displayed
// Then the system should show a default image

  it('devuelve null en poster si no hay poster_path', () => {
    const raw = {
      id: 2,
      title: 'Sin póster',
      poster_path: null,
      release_date: '2020-01-01',
      vote_average: 7.0,
      genre_ids: []
    };

    const result = normalizeMovie(raw);

    expect(result.poster).toBeNull();
  });

});