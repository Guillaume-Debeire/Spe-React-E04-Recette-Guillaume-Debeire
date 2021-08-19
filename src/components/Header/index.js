// chaque fois qu'on écrit du jsx on écrit en fait React.createElement donc il faut importer React
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// on prépare la fonction qui retourne le JSX décrivant un morceau d'ui
const Header = ({
  title,
  author,
  difficulty,
  image,
}) => (
  <header
    className="header"
    // si on veut mettre des styles inline on passe un objet de styles
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-info">{author} - {difficulty}</p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// on l'exporte pour pouvoir s'en servir ailleurs
export default Header;
