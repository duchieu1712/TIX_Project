import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import movieReducer from './reducers/movie';
import thunk from "redux-thunk";
import cinemaReducer from './reducers/cinema';
import userReducer from './reducers/user';
import theaterReducer from './reducers/theater';

const enhanceCompose = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
  // reducer khai báo tại đây
  movieReducer: movieReducer,
  userReducer: userReducer,
  cinemaReducer: cinemaReducer,
  theaterReducer: theaterReducer
})
const store = createStore(
  rootReducer,
  enhanceCompose
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;