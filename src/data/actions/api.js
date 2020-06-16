import axios from '../../axios/axios'
import { selectMovieGoer } from './state'

export const getMoviesOnePerson = (id) => (dispatch) => {
    axios.get(`/people/${id}`).then(({ data }) => { 
       dispatch(selectMovieGoer(id, data.data.movies ))
    })
}
    