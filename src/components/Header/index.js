// chaque fois qu'on écrit du jsx on écrit React.createElement donc il faut importer React
import React from 'react';

// On prépare la fonction qui retourne le JSX décrivant un morceau d'ui
function Header() {
  return (
    <header>
      <h1>Recette de crêpes</h1>
    </header>
  );
}

export default Header;
