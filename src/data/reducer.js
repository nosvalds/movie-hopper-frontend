
const getOneMovieGoer = (state, action) => {
    return {
        ...state,
        selectedMovieGoer: state.movieGoersList.filter((movieGoer) => {
            return movieGoer.id === action.id;
        }),
        movies: action.movies // action.movies is an array of movies passed from API
    }
}
const setPeople = (state, action) => {
    return {
        ...state,
        movieGoersList: action.data
    }
}
// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PEOPLE": return setPeople(state, action);
        case "GET_ONE_MOVIEGOER": return getOneMovieGoer(state, action);
        default: return state;
    }
}

export default reducer;