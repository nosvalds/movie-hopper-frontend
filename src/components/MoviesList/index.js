import { connect } from 'react-redux';
import MoviesList from './MoviesList';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps)(MoviesList);