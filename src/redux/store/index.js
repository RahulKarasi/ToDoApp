import toDoReducer from '../reducers/toDoReducer';

import {combineReducers, legacy_createStore} from 'redux';


const rootReducer = combineReducers({
  toDoReducer,

});

const store = legacy_createStore(rootReducer);
export default store;

