import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
function Striped() {
  return (
    <div>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>
  );
}

export default Striped;