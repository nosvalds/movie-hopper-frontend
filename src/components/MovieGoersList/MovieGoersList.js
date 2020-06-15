import React, { Component, Fragment } from 'react';
import {
  Jumbotron,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const MovieGoersList = ({ movieGoersList }) => (
  (movieGoersList.length > 0) ? (

    <Fragment>
      <Jumbotron>
        <h1>Movie-goers List</h1>
      </Jumbotron>

      <ListGroup>
        {
          movieGoersList.map((movieGoer, index) => (
            <ListGroupItem key={index}>{movieGoer.name}</ListGroupItem>
          ))
        }
      </ListGroup>
    </Fragment>

  ) : (
      <Jumbotron>
        <h1>No movie-goers found!</h1>
      </Jumbotron>
    )
);

export default MovieGoersList;