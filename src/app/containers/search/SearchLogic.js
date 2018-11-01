import { createLogic } from 'redux-logic';

import * as types from './SearchActionTypes';
import * as actions from './SearchActions';
import toastr from 'toastr';
import GitHub from 'github-api';


/**
* 
* Makes request to get user searched for, then returns their repositories.
*
* @module SearchLogic
* @return {Object} done - Action object
* @throws {error} Error - any fetching error
*/

const GITHUB = new GitHub({ token: '244c5b52f50af383d8b40434197105b8f40a4e00' });

const userSearchLogic = createLogic({
    type: types.FETCHING_QUERY,
    cancelType: types.QUERY_FETCH_CANCEL,
    latest: true, 
  
    process({ action }, dispatch, done) {
      const query = action.payload;

      return GITHUB.getUser(query).listRepos()
        .then((data) => {
          dispatch(actions.fetchSearchFulfilled(data.data))
        })
        .catch(err => {
          toastr.error('No repositories for this username were found')
          dispatch(actions.searchFetchError(err))
        })
        .then(() => done())
    }
});


const SearchLogic = [
  userSearchLogic
];

export default SearchLogic;
