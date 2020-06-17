import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import { clearMovieGoerSelection } from '../../data/actions/state';

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(clearMovieGoerSelection())
  }
}

export default connect("", mapDispatchToProps)(ResetButton);