import axios from "../../axios/axios"

import {
  selectMovieGoer,
  setPeople,
  setMovies,
} from './state'

const compareMovieFrequency = (a, b) => {
    const freqA = a.frequency;
    const freqB = b.frequency;

    let comparison = 0;
    comparison = freqA < freqB ? 1 : -1;
    return comparison;
}

export const getPeople = () => {
  return (dispatch) => {
    axios.get("/people").then(({ data }) => {
      dispatch(setPeople(data.data))
    })
  }
}

export const getAllMovies = () => {
    return (dispatch) => {
        axios.get("/movies").then(({ data }) => {
            dispatch(setMovies(data.sort(compareMovieFrequency)))
        })
    }
}


export const getMovies = (id) => (dispatch, getState) => {
    dispatch(selectMovieGoer(id))
    let selectedMovieGoers = getState().selectedMovieGoer;
    let peopleIds = selectedMovieGoers.map(person => person.id);

    // if it's 1 selection query the /people/id route
    if (peopleIds.length === 1) {
        axios.get(`/people/${id}`).then(({ data }) => {
            let movies = data.data.movies.map((movie) => ({ frequency: 1, movie: movie })) // turn into new format of state with frequency
            dispatch(setMovies(movies.sort(compareMovieFrequency)))

        })
    } else if (peopleIds.length > 1) {
        // if it's multiple selections, query the match?people="ids" route
        axios.get(`/people/match?people=${peopleIds.join(',')}`).then(({ data }) => {
            dispatch(setMovies(data.data.filter((movie) => (movie.frequency > 1)).sort(compareMovieFrequency))); // if there is more than 1 person selected don't save movies only liked by 1 person to state
        });
    }
    // always "select" a moviegoer, could add error handling if the above api calls failed.

}
