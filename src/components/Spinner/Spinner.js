import React from "react";
import Spinner from "react-bootstrap/Spinner";
import './Spinner.css'

function spinner() {
  return (
    <div className="spin">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default spinner;
