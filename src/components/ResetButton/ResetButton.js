import React from "react";

const ResetButton = ({ handleReset }) => (
  <div className="search-button-container">
    <button className="search-button" onClick={ handleReset }>Clear Selection</button>
  </div>
)

export default ResetButton;
