import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from './data/store';

import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList/';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';


function App() {
  return (
   <Provider store={ store }>
      <Header />
      <MovieGoersList />
      <SearchButton />
      <Footer />
    </Provider>
   );
}

export default App;
