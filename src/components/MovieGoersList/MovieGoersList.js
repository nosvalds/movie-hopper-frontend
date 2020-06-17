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
    const { movieGoersList, handleSelect, selectedIds } = this.props;

    return (
      (movieGoersList.length > 0) ? (
        <Fragment>
          <h2 className="moviegoers-list-title">Movie Goers</h2>
          <ListGroup className="p-0 moviegoers-list">
            {
              movieGoersList.map((movieGoer, index) => (
                <ListGroupItem className="moviegoer-card"
                  active={selectedIds.indexOf(movieGoer.id) !== -1} // if movieGoer.id is in the selectedId array, then highlight as selected
                  key={index}
                  onClick={() => handleSelect(movieGoer.id)}
                  aria-label={movieGoer.name}
                >
                  {movieGoer.name}
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Fragment>

      ) : (
          <h2 className="moviegoers-list-title" aria-label="No movie-goers found">No movie-goers found!</h2>
        )
    );
  }
}

export default MovieGoersList;