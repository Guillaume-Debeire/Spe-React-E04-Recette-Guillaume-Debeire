import React from 'react';
import Header from '../Header';
import Ingredients from '../Ingredients';
import Instructions from '../Instructions';

import './style.scss';

const Recipe = () => (
  <div className="recipe">
    <Header />
    <Ingredients />
    <Instructions />
  </div>
);

export default Recipe;
