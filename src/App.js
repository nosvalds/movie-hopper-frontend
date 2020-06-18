import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MovieGoersList from './components/MovieGoersList/';
import Footer from './components/Footer';
import MoviesList from './components/MoviesList';
import ResetButton from './components/ResetButton/';
import MainPage from './components/MainPage/MainPage';
import MoviesRankingList from './components/MovieRankingList';
import FourOhFour from './components/FourOhFour/FourOhFour';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/people">
            <MovieGoersList />
            <ResetButton />
            <MoviesList />
          </Route>
          <Route exact path="/movies">
            <MoviesRankingList />
          </Route>
          <FourOhFour />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
