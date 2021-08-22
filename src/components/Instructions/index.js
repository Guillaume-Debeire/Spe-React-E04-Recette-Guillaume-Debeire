import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Instructions = ({ listOfInstructions }) => (
  <ul className="instructions">
    {listOfInstructions.map((instruction) => (
      <li className="instructions-item" key={instruction}>{instruction}</li>
    ))}
  </ul>
);

Instructions.propTypes = {
  listOfInstructions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Instructions;
