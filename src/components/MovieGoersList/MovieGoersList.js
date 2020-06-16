import React, { Fragment, Component } from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

class MovieGoersList extends Component {
  componentDidMount() {
    this.props.handleMount()
  }
  render() {
    const { movieGoersList, handleSelect } = this.props;

    return (
      (movieGoersList.length > 0) ? (

        <Fragment>
          <h2>Movie-goers List</h2>

          <ListGroup>
            {
              movieGoersList.map((movieGoer, index) => (
                <ListGroupItem
                  key={index}
                  onClick={() => handleSelect(movieGoer.id)}
                >
                  {movieGoer.name}
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Fragment>

      ) : (
          <h2>No movie-goers found!</h2>
        )
    );
  }
}

export default MovieGoersList;