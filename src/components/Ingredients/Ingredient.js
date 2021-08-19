import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ quantity, name, unit }) => (
  <li className="ingredients-item"><span className="ingredients-quantity">{quantity} {unit}</span> {name}</li>
);

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Ingredient;
