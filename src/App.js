import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList/';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';
import MoviesList from './components/MoviesList';


function App() {
  return (
    <>
      <Header />
      <MovieGoersList />
      <SearchButton />
      <MoviesList />
      <Footer />
    </>
   );
}

export default App;
