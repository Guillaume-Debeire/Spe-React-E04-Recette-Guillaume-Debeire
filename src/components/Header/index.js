// chaque fois qu'on écrit du jsx on écrit React.createElement donc il faut importer React
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// On prépare la fonction qui retourne le JSX décrivant un morceau d'ui
const Header = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header
    className="header"
    // Si on veut mettre des styles inline, on passe un objet de styles
    style={{
      backgroundImage: `url(${thumbnail})`,
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
  thumbnail: PropTypes.string.isRequired,
};

export default Header;
