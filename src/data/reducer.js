// saves the array of moviegoer people objects to state
const getMovieGoers = (state, action) => {
    return {
        ...state,
        movieGoersList: action.people, // action.people is an array of person objects passed from API
    }
}

const getOneMovieGoer = (state, action) => {
    return {
        ...state,
        selectedMovieGoer: state.movieGoersList.filter((movieGoer) => {
            return movieGoer.id === action.id; 
        }),
        //movies: action.movies // action.movies is an array of movies passed from API
    }
}

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIEGOERS": return getMovieGoers(state, action);
        case "GET_ONE_MOVIEGOER": return getOneMovieGoer(state, action);
        default: return state;
    }
  }
  
  export default reducer;