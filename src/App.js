import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList/';
import Footer from './components/Footer';
import MoviesList from './components/MoviesList';
import ResetButton from './components/ResetButton/';

function App() {
  return (
    <>
      <Header />
      <MovieGoersList />
      <ResetButton />
      <MoviesList />
      <Footer />
    </>
  );
}

export default App;
