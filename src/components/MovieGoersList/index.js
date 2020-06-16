import { connect } from 'react-redux';
import MovieGoersList from './MovieGoersList';
import { getPeople } from '../../data/actions/api';
import { selectMovieGoer } from '../../data/actions/state'

const mapStateToProps = (state) => {
  return {
    movieGoersList: state.movieGoersList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (id) => dispatch(selectMovieGoer(id)),
    handleMount: () => dispatch(getPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGoersList);