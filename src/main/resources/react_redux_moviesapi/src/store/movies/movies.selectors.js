import { createSelector } from 'reselect';

export const moviesSelector = state => state.movies;

/**
 * The selectors allow you to take data from the state
 * to make calculations on it for example and to put it in the cash memory
 * "memoĩsation"
 */
export const moviesIsLoadingSelector = createSelector(
  [moviesSelector],
  movies => movies.isLoading
);

export const moviesListSelector = createSelector(
  [moviesSelector],
  movies => movies.data
);

export const moviesSelectedMovieIndexSelector = createSelector(
  [moviesSelector],
  movies => movies.selectedMovie
);

export const moviesSelectedMovieSelector = createSelector(
  [moviesListSelector, moviesSelectedMovieIndexSelector],
  (moviesData, index) => moviesData[index]
);

