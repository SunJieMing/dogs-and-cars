import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <h1>Cars</h1>
      <ul>
        <li>Tesla Model X</li>
        <li>Geo Storm</li>
        <li>Ford Fiesta</li>
      </ul>
    </div>
  );
};
