import { connect } from 'react-redux';
import MovieGoersList from './MovieGoersList';
import { getPeople } from '../../data/actions/api';
import { getMovies } from '../../data/actions/api';

const mapStateToProps = (state) => {
  let selectedIds = state.selectedMovieGoer.length > 0 ? state.selectedMovieGoer.map((person) => person.id) : "";
  return {
    movieGoersList: state.movieGoersList,
    selectedIds,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMount: () => dispatch(getPeople()),
    handleSelect: (id) => dispatch(getMovies(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGoersList);