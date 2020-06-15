import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Alert from 'react-bootstrap/Alert'

const MoviesList = ({ movies }) => (
    (movies.length > 0) ? (
        <>
            <h2>Movies</h2>
            <CardColumns>
                { movies.map((movie, i) => (
                    <Card key={ i }>
                        <Card.Body>
                            <Card.Title>
                                { movie.name }
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            { movie.year}
                        </Card.Footer>
                    </Card>
                ))}
            </CardColumns>
        </>
    ) :
    (
        <Alert variant="primary">
            Select a person and click search to see their favorite movies!
        </Alert>
    )
);


export default MoviesList;