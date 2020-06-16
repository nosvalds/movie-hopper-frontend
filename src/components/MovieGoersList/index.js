import { connect } from 'react-redux';
import MovieGoersList from './MovieGoersList';
import { getMoviesOnePerson } from '../../data/actions/api';

const mapStateToProps = (state) => {
  return {
    movieGoersList: state.movieGoersList,
    selectedId: state.selectedMovieGoer.length > 0 ? state.selectedMovieGoer[0].id : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (id) => dispatch(getMoviesOnePerson(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGoersList);