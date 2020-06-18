import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Alert from 'react-bootstrap/Alert';
import Loading from '../Loading/Loading';


class MoviesRankingList extends Component {
  componentDidMount() {
    this.props.handleMount()
  }

  render() {
    const { movies } = this.props;
  
    return (
      (movies.length > 0) ? (
        <>
          <h2 className="movies-title" aria-label="Movies">Movies</h2>
          <CardColumns className="movies-list" aria-label="Movies List">
            {movies.map((movie, i) => (
              <Card key={i} className="movie-card">
                <Card.Header className="movie-card-header" aria-label={ movie.frequency }>
                  { (movie.frequency === 1 ? "1 person likes" : `${movie.frequency} people like`) + " this movie!"}
                </Card.Header>
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
        <>
          <Loading />
          <Alert 
            variant="primary" 
            className="instructions"
            aria-label="No favourite movies yet!"
          >
            No favourite movies yet!
          </Alert>
        </>
      )
    );
  }
}

export default MoviesRankingList;