import movies from './movies/movies.reducers'; 
import favoris from './favoris/favoris.reducers';

/** Default state exemple
 * {
  movies: {
    data: [],
    selectedMovie: 0,
    isLoading: false,
    error: null
  },
  favoris: {
    data: [],
    isLoading: false,
    error: null
  }
}
 */


export default {
  movies,
  favoris
}
