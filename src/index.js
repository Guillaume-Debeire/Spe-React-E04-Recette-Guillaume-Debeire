// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// == Import : local
// Composants

// Lorsque l'ont fait un import on met un chemin relatif pour aller trouver ce qu'on veut
// Dans le React-modele on a configuré un resolver qui donne un alias pour src
// ainsi on peut mettre un chemi nabsolu depuis src
// import Recipe from './components/Recipe';
import Recipe from 'src/components/Recipe';

// == Render
// 1. Elément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM Virtuel)
const rootReactElement = <Recipe />;
// 2 La cible du DOM (la où la structure doit prendrevie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
