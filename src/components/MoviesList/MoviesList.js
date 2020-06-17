import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Alert from 'react-bootstrap/Alert'

const MoviesList = ({ movies }) => (
  (movies.length > 0) ? (
    <>
      <h2 className="movies-title" aria-label="Movies">Movies</h2>
      <CardColumns className="movies-list" aria-label="Movies List">
        {movies.map((movie, i) => (
          <Card key={i} className="movie-card">
            <Card.Body>
              <Card.Title aria-label={movie.name}>
                {movie.name}
              </Card.Title>
            </Card.Body>
            <Card.Footer aria-label={movie.year}>
              {movie.year}
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </>
  ) :
    (
      <Alert variant="primary" className="instructions"
        aria-label="Select a person to see their favourite movies!">
        Select a person to see their favourite movies!
      </Alert>
    )
);


export default MoviesList;