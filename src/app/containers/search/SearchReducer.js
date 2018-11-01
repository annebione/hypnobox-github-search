import * as types from './SearchActionTypes';

const inititalState = {
    result: [],
    fetching: false,
    fetched: false,
    error: null
}

function SearchReducer(state = inititalState, action) {
  switch (action.type) {
    case types.FETCHING_QUERY : {
      return { ...state, fetching: true}
    }
    case types.QUERY_FETCH_CANCEL: {
      return state
    }
    case types.QUERY_FETCH_FULFILLED: {
      return  {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        result: action.payload
      }
    }
    case types.QUERY_FETCH_ERROR: {
      return {
        ...state,
        fetching: false,
        error: true
      }
    }        
    default:
    return state
  }
}

export default SearchReducer;