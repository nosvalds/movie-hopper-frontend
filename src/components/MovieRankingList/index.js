import { connect } from 'react-redux';
import MoviesRankingList from './MoviesRankingList';
import { getAllMovies } from '../../data/actions/api';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleMount: () => dispatch(getAllMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesRankingList);