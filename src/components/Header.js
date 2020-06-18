import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => (
  <a href="/">
    <Jumbotron className="header">
        <h1 className="header-h1" aria-label="Movie Hopper App - Find Movies in Common!">Movie Hopper</h1>
    </Jumbotron >
  </a>
)

export default Header;