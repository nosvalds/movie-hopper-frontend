import { createStore, compose, applyMiddleware } from 'redux';

import initialState from './initialState';
import reducer from './reducer';
import thunk from 'redux-thunk';

  
  // set up redux dev tools 
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // store set up
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;