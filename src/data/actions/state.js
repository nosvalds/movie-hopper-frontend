export const selectMovieGoer = (id, movies) => {
    return {
        type: "GET_ONE_MOVIEGOER",
        id,
        movies
    }
}