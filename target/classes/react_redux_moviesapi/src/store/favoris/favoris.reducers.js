import * as actions from './favoris.actions';

/**
 * When a specific actions is dispatch by the user reducer role is to change the state of the app
 */
export default (state = {
  data: [],
  isLoading: false,
  error: null
}, action) => {
  switch(action.type) {
    case actions.FETCH_FAVORIS_SUCCESS: {
      return {
        ...state,
        data: action.favoris,
        isLoading: false,
        error: null
      }
    }
    case actions.FETCH_FAVORIS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case actions.REMOVE_FAVORI_SUCCESS:
    case actions.ADD_FAVORI_SUCCESS: {
      return {
        ...state,
        data: action.favoris,
        error: null
      }
    }
    case actions.REMOVE_FAVORI_ERROR:
    case actions.ADD_FAVORI_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
