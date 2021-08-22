import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

import './style.scss';

const Ingredients = ({ listOfIngredients }) => (
  <ul className="ingredients">
    {listOfIngredients.map((currentIngredient) => (
      <Ingredient
        key={currentIngredient.id}
        name={currentIngredient.name}
        quantity={currentIngredient.quantity}
        unit={currentIngredient.unit}
      />
    ))}
  </ul>
);

Ingredients.propTypes = {
  listOfIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Ingredients;
