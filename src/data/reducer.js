
const selectMovieGoer = (state, action) => {
  const newSelection = [...state.selectedMovieGoer]
  const existingIndex = newSelection.findIndex((person) => action.id === person.id)
  if (existingIndex !== -1) {
    newSelection.splice(existingIndex, 1)
  } else {
    const movieGoer = state.movieGoersList.find((movieGoer) => {
      return movieGoer.id === action.id;
    })
    newSelection.push(movieGoer)
  }
  return {
    ...state,
    selectedMovieGoer: newSelection
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
    case "CLEAR_ALL": return { // clear selected moviegoers
      ...state,
      selectedMovieGoer: [],
      movies: []
    };
    default: return state;
  }
}

export default reducer;