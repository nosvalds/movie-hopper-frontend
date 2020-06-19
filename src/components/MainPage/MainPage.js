import React from 'react';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const MainPage = () => (
    <section className="container mt-4 p-4 big-buttons-container">
        <a href="#/movies" className="m-4">
            <Button id="movies-btn" aria-label="start with films" className="p-2" variant="primary" size="lg" block>
                <span class="hover-hide"><FontAwesomeIcon icon={ faFilm } size="6x" aria-label="film reel icon" /></span>
            </Button>
        </a>
        <a href="#/people" className="m-4">
            <Button id="people-btn" aria-label="start with people" className="p-2" variant="secondary" size="lg" block>
            <span class="hover-hide"><FontAwesomeIcon icon={ faUserFriends } size="6x" aria-label="people icon"/></span>
            </Button>
        </a>
    </section>
)

export default MainPage;