import { connect } from 'react-redux';
import MovieGoersList from './MovieGoersList';

const mapStateToProps = (state) => {
  return {
    movieGoersList: state.movieGoersList,
  }
}

export default connect(mapStateToProps)(MovieGoersList);