import { connect } from 'react-redux';
import MoviesList from './MoviesList';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    numPeopleSelected: state.selectedMovieGoer.length,
  }
}

export default connect(mapStateToProps)(MoviesList);