import React, { Fragment } from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const MovieGoersList = ({ movieGoersList }) => (
  (movieGoersList.length > 0) ? (

    <Fragment>
      <h2>Movie-goers List</h2>

      <ListGroup>
        {
          movieGoersList.map((movieGoer, index) => (
            <ListGroupItem key={index}>{movieGoer.name}</ListGroupItem>
          ))
        }
      </ListGroup>
    </Fragment>

  ) : (
      <h2>No movie-goers found!</h2>
    )
);

export default MovieGoersList;