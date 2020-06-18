import axios from "../../axios/axios"
import {
    selectMovieGoer,
    setPeople,
    setMovies,
} from './state'

export const getPeople = () => {
    return (dispatch) => {
        axios.get("/people").then(({ data }) => {
            dispatch(setPeople(data.data))
        })
    }
}

export const getMovies = (id) => (dispatch, getState) => {
    dispatch(selectMovieGoer(id))
    let selectedMovieGoers = getState().selectedMovieGoer;
    let peopleIds = selectedMovieGoers.map(person => person.id);
    console.log(peopleIds)
    // if (selectedMovieGoers.length === 0) {
    //     peopleIds[0] = id;
    // } else {
    //     peopleIds = selectedMovieGoers.map((person) => person.id);
    //     peopleIds.push(id); // array of currently selected movie-goers
    // }
    // if it's 1 selection query the /people/id route
    if (peopleIds.length === 1) {
        console.log("In if")
        axios.get(`/people/${id}`).then(({ data }) => {
            dispatch(setMovies(data.data.movies))

        })
    } else if (peopleIds.length > 1) {
        console.log("In else")
        // if it's multiple selections, query the match?people="ids" route
        axios.get(`/people/match?people=${peopleIds.join(',')}`).then(({ data }) => {
            dispatch(setMovies([data.data]))
        });
    }
    console.log(peopleIds.length)
    // always "select" a moviegoer, could add error handling if the above api calls failed.

}