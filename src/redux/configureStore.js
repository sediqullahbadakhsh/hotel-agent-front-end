import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mostRecentReducer from './MostRecent/MostRecent';
import UserReducer from './User/User';

const rootReducer = combineReducers({
  MostRecent: mostRecentReducer,
  User: UserReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;
