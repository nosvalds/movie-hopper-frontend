import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './data/store';
import MovieGoersList from './components/MovieGoersList/';

function App() {
  return (
    <Provider store={ store }>
      <MovieGoersList />
    </Provider>
  );
}

export default App;
