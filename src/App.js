import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <MovieGoersList />
      <SearchButton />
      <Footer />
    </>
   );
}

export default App;
