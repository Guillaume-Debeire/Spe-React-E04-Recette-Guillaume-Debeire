import React from 'react';

import recipe from 'src/data/recipe';

// Lorsqu'on fait un import on met un chemin relatif pour aller trouver ce qu'on veut
// Dans le React-modele on a configurer un resolver qui donne un alias pour src
// ainsi on peut mettre un chemin absolu depuis src
// import Instructions from '../Instructions';
import Instructions from 'src/components/Instructions';

import Header from '../Header';
import Ingredients from '../Ingredients';

import './style.scss';

const Recipe = () => (
  <div className="recipe">
    <Header
      title={recipe.title}
      difficulty={recipe.difficulty}
      author={recipe.author}
      image={recipe.thumbnail}
    />
    <Ingredients
      listOfIngredients={recipe.ingredients}
    />
    <Instructions listOfInstructions={recipe.instructions} />
  </div>
);

export default Recipe;
