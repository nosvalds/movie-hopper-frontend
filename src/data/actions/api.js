import axios from "../../axios/axios"
import { selectMovieGoer,
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
    let peopleIds = [];
    let selectedMovieGoers = getState().selectedMovieGoer;
    if (selectedMovieGoers.length === 0) {
        peopleIds[0] = id;
    } else {
        peopleIds = selectedMovieGoers.map((person) => person.id);
        peopleIds.push(id); // array of currently selected movie-goers
    }
    console.log(peopleIds);
    // if it's 1 selection query the /people/id route
    if (peopleIds.length === 1) {
        axios.get(`/people/${id}`).then(({ data }) => { 
            dispatch(setMovies(data.data.movies))
        })
    } else {
        // if it's multiple selections, query the match route ?people=${peopleIds.join(',')}
       axios.get(`/people/match?people=${peopleIds.join(',')}`).then(({ data }) => {
            console.log(data.data);
            //dispatch(setMovies(data.data.movies))
       });
    }
    dispatch(selectMovieGoer(id))

}