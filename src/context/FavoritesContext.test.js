import { toggleFavoriteReducer } from './favoritesReducer';

const movie1 = { id: 1, title: 'Inception' };
const movie2 = { id: 2, title: 'Interstellar' };

describe('toggleFavoriteReducer', () => {

  // Scenario: Añadir película a favoritas
  // Given the user is viewing a movie
  // When the user taps the heart icon
  // Then the movie should be added to favorites
  it('añade una película si no estaba en favoritas', () => {
    const result = toggleFavoriteReducer([], movie1);
    expect(result).toContain(movie1);
  });

  // Scenario: Quitar película de favoritas
  // Given the user has a movie in favorites
  // When the user taps the heart icon again
  // Then the movie should be removed from favorites
  it('elimina una película si ya estaba en favoritas', () => {
    const result = toggleFavoriteReducer([movie1], movie1);
    expect(result).not.toContain(movie1);
  });

  it('no elimina otras películas al quitar una', () => {
    const result = toggleFavoriteReducer([movie1, movie2], movie1);
    expect(result).toContain(movie2);
  });

});