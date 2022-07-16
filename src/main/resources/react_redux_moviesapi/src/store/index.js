import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

const appReducer = combineReducers(reducers);

/**
 * todo
 * read doc to understand middleware
 * i found this code, when searching how to use logger
 * but i really don't understand what it does, but it works !!!!
 */
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(appReducer, composeWithDevTools(
  applyMiddleware(...middlewares))
);
