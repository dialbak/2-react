import { createSelector } from 'reselect';

/**
 * The selectors allow you to take data from the state
 * to make calculations on it for example and to put it in the cash memory
 * "memoĩsation"
 */
export const favorisSelector = state => state.favoris;

/**
 * create selector allow to create mémoïsed selector
 */
export const favorisListSelector = createSelector(
  [favorisSelector],
  favoris => favoris.data
);

export const favorisIsLoadingSelector = createSelector(
  [favorisSelector],
  favoris => favoris.isLoading
);

export const favorisListNameSelector = createSelector(
  [favorisListSelector],
  favorisData => favorisData.map( f => f.title )
);
