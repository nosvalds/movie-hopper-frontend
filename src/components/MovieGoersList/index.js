import { connect } from 'react-redux';
import MovieGoersList from './MovieGoersList';
import { getPeople } from '../../data/actions/api';
import { getMovies } from '../../data/actions/api';

const mapStateToProps = (state) => {
  return {
    movieGoersList: state.movieGoersList,
    selectedId: state.selectedMovieGoer.length > 0 ? state.selectedMovieGoer[0].id : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMount: () => dispatch(getPeople()),
    handleSelect: (id) => dispatch(getMovies(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGoersList);