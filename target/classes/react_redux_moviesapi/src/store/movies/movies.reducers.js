import * as actions from './movies.actions';

/**
 * When a specific actions is dispatch by the user
 * reducer role is to change the state of the app
 */
export default (state = {
  data: [],
  isLoading: false,
  error: null,
  selectedMovie: 0
}, action) => {
  switch(action.type) {
    case actions.REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actions.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [ ...action.movies ]
      }
    }
    case actions.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case actions.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.index
      }
    }
    default: {
      return state
    }
  }
}
