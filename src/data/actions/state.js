export const selectMovieGoer = (id) => {
    return {
        type: "GET_ONE_MOVIEGOER",
        id
    }
}