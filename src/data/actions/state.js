export const selectMovieGoer = (id) => {
    return {
        type: "SELECT_MOVIEGOER",
        id
    }
}

export const setPeople = (data) => {
    return {
        type: "SET_PEOPLE",
        data: data
    }
}

export const setMovies = (movies) => {
    return {
        type: "SET_MOVIES",
        movies
    }
}

export const clearMovieGoerSelection = () => {
    return {
        type: "CLEAR_PEOPLE",
    }
}