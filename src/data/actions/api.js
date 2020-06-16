import axios from "../../axios/axios"
import { setPeople } from "./state"
import { selectMovieGoer } from './state'

export const getPeople = () => {
    return (dispatch) => {
        axios.get("/people").then(({ data }) => {
            dispatch(setPeople(data.data))
        })
    }
}

export const getMoviesOnePerson = (id) => (dispatch) => {
    axios.get(`/people/${id}`).then(({ data }) => { 
       dispatch(selectMovieGoer(id, data.data.movies ))
    })
}