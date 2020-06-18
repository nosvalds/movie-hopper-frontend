import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList/';
import Footer from './components/Footer';
import MoviesList from './components/MoviesList';
import ResetButton from './components/ResetButton/';
import MainPage from './components/MainPage/MainPage';
import MoviesRankingList from './components/MovieRankingList';

function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/people">
          <MovieGoersList />
          <ResetButton />
          <MoviesList />
        </Route>
        <Route path="/movies">
          <MoviesRankingList />
        </Route>
      <Footer />
    </Router>
  );
}

export default App;
