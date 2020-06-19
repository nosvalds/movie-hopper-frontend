import React from "react";

const ResetButton = ({ handleReset }) => (
  <div className="search-button-container">
    <button
      className="search-button btn btn-dark"
      onClick={handleReset}
      aria-label="Click to clear selection">
      Clear Selection
      </button>
  </div>
)

export default ResetButton;
