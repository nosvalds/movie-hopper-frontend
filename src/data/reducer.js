
const selectMovieGoer = (state, action) => {
    return {
        ...state,
        selectedMovieGoer: [
            ...state.selectedMovieGoer]
            .concat(state.movieGoersList.filter((movieGoer) => {
                return movieGoer.id === action.id;
            })),
    }
}

const setPeople = (state, action) => {
    return {
        ...state,
        movieGoersList: action.data
    }
}

const setMovies = (state, action) => {
    return {
        ...state,
        movies: action.movies,
    }
}

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PEOPLE": return setPeople(state, action);
        case "SELECT_MOVIEGOER": return selectMovieGoer(state, action);
        case "SET_MOVIES": return setMovies(state, action);
        case "CLEAR_PEOPLE": return { // clear selected moviegoers
            ...state,
            selectedMovieGoer: [],
        };
        default: return state;
    }
}

export default reducer;