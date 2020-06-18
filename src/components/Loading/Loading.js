import React, { Component } from "react";
import loader from '../../loader-large.png';

class Loading extends Component {

  render() {

    return (
      <div className="loader" aria-label="Loading...">
        <img alt="Loading" src={loader} />
      </div>
    );
  }
}

export default Loading;