// chaque fois qu'on écrit du jsx on écrit React.createElement donc il faut importer React
import React from 'react';

import './style.scss';

// On prépare la fonction qui retourne le JSX décrivant un morceau d'ui
const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">Crêpes raffinées</h1>
      <p className="header-info">John Deuf - Facile</p>
    </div>
  </header>
);

export default Header;
