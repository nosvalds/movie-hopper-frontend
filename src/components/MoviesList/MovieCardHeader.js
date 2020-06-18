import React from 'react';
import Card from 'react-bootstrap/Card'

const MovieCardHeader = ({movieFrequency, numPeopleSelected}) => {
    // if only 1 person is selected, don't show anything about frequency
    if (numPeopleSelected === 1) { 
      return null
    } else if (numPeopleSelected === movieFrequency) {
      return (
        <Card.Header className="movie-card-header" aria-label={movieFrequency}>
          You {numPeopleSelected === 2 ? "both" : "all"} like this movie!
        </Card.Header>
      )
    } 
  }

export default MovieCardHeader;