import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => (

  <Jumbotron className="header">
    <h1 className="header-h1">Movie Hopper</h1>
    <p className="header-para">
      Select a person to see their favourite movies.<br />
      Select multiple to see films they have in common.
    </p>
  </Jumbotron >
)

export default Header;