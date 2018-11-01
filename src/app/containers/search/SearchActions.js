import * as types from './SearchActionTypes';


// Client Action Creators

export const searchFetch = name => (
  {
    type: types.FETCHING_QUERY,
    payload: name
  }
);

export const fetchSearchFulfilled = client => (
  {
    type: types.QUERY_FETCH_FULFILLED,
    payload: client
  }
)

export const searchFetchCancel = () => (
  {
     type: types.QUERY_FETCH_CANCEL 
  }
);

export const searchFetchError = (err) => (
  {
    type: types.QUERY_FETCH_ERROR,
    payload: err,
  }
);
