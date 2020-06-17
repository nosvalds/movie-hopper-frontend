import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => (

  <Jumbotron>
    <h1 className="moviegoers-title display-4">Movie Hopper</h1>
    <p class="lead text-center">Select a person to see their favourite movies. Select multiple to see which favourite films they have in common.</p>
  </Jumbotron >
)

export default Header;