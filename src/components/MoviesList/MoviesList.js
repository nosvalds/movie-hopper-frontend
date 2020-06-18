import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Alert from 'react-bootstrap/Alert';
import MovieCardHeader from './MovieCardHeader';

const MoviesList = ({ movies, numPeopleSelected }) => (
  (movies.length > 0) ? (
    <>
      <h2 className="movies-title" aria-label="Movies">Movies</h2>
      <CardColumns className="movies-list" aria-label="Movies List">
        {movies.map((movie, i) => ( (numPeopleSelected !== 1 && movie.frequency === 1) ? null : // dont show movies that only 1 person likes if multiple people are selected.
          <Card key={i} className="movie-card">
            <MovieCardHeader numPeopleSelected={numPeopleSelected} movieFrequency={movie.frequency} />
            <Card.Body>
              <Card.Title aria-label={movie.movie.name}>
                {movie.movie.name}
              </Card.Title>
            </Card.Body>
            <Card.Footer aria-label={movie.movie.year}>
              {movie.movie.year}
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </>
  ) :
    (
      <Alert variant="primary" className="instructions"
        aria-label="Select a person to see their favourite movies. Select multiple people to see movies they have in common!">
        Select a person to see their favourite movies.<br />
        Select multiple people to see movies they have in common!
      </Alert>
    )
);


export default MoviesList;