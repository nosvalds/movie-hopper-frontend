export const selectMovieGoer = (id, movies) => {
    return {
        type: "GET_ONE_MOVIEGOER",
        id,
        movies
    }
}
export const setPeople = (data) => {
    return {
        type: "SET_PEOPLE",
        data: data
    }
}