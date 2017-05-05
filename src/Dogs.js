import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <h1>Dogs</h1>
      <ul>
        <li>Border Collie</li>
        <li>Golden Retriever</li>
        <li>German Shepherd</li>
      </ul>
    </div>
  );
};
