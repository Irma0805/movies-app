
export function toggleFavoriteReducer(prev, movie) {
  return prev.some(m => m.id === movie.id)
    ? prev.filter(m => m.id !== movie.id)
    : [...prev, movie];
}
