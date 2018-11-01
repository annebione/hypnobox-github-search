import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import SearchReducer from '../app/containers/search/SearchReducer';

export default combineReducers({
  routing: routerReducer,
  search: SearchReducer
})