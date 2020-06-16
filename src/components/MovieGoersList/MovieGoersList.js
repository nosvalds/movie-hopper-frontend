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
    const { movieGoersList, handleSelect, selectedId } = this.props;

    return (
      (movieGoersList.length > 0) ? (
        <Fragment>
          <h2 className="moviegoers-list-title">Movie-goers List</h2>
          <ListGroup className="p-0 moviegoers-list">
            {
              movieGoersList.map((movieGoer, index) => (
                <ListGroupItem className="moviegoer-card"
                  active={movieGoer.id === selectedId}
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
          <h2 className="moviegoers-list-title">No movie-goers found!</h2>
        )
    );
  }
}

export default MovieGoersList;