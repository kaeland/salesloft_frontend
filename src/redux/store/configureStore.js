import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from '../reducers/auth';

const middlewares = [ thunkMiddleware ]

const reducer = combineReducers({
  auth 
})

let store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default () => {
  return store
}