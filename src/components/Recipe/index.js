import React from 'react';

import recipe from 'src/data/recipe';

// Lorsqu'on fait un import on met un chemin relatif pour aller trouver ce qu'on veut
// Dans le React-modele on a configuré un resolver qui donne un alias pour src
// ainsi on peut mettre un chemin absolu depuis src
// import Instruction from '../Instructions';
import Header from '../Header';
import Ingredients from '../Ingredients';
import Instructions from '../Instructions';

import './style.scss';

const Recipe = () => (
  <div className="recipe">
    <Header
      title={recipe.title}
      author={recipe.author}
      difficulty={recipe.difficulty}
      thumbnail={recipe.thumbnail}
    />
    <Ingredients
      listOfIngredients={recipe.ingredients}
    />
    <Instructions />
  </div>
);

export default Recipe;
