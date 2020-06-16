export const selectMovieGoer = (id) => {
    return {
        type: "GET_ONE_MOVIEGOER",
        id
    }
}
export const setPeople = (data) => {
    return {
        type: "SET_PEOPLE",
        data: data
    }
}