# Nouveautés E04

## Composants

Dans nos projets React, on pourrait décrire toute l'interface en faisant un gros bloc

```js
import React from 'react';
import { render } from 'react-dom';

const rootElement = (
  <div>
    <header>
      <h1>Coucou</h1>
    </header>
    <main>
      <p>Hello world</p>
    </main>
  </div>
);

render(rootElement, document.getElementById('root'));
```

Plutot que de tout faire d'un bloc on va exploiter une architecture de composants, c'est à dire qu'on va exploser tout ça en plein de petit réutilisables et paramétrables. On va faire des fonctions qui renvoient chaque morceau d'interface, des fonctions qui retournent du JSX

```js
import React from 'react';
import { render } from 'react-dom';

// un composant est une fonction qui commence par une majuscule par convention
function Header() {
  // qui retourne un element React (React.createElement()) écrit ici en JSX
  return (
    <header>
      <h1>Coucou</h1>
    </header>
  );
}

function Content() {
  return (
    <main>
      <p>Hello world</p>
    </main>
  );
}

const rootElement = (
  <div>
    <Header />
    <Content />
  </div>
)

render(rootElement, document.getElementById('root'));
```

Plutot que de tout écrire dans un seul fichier, on va écrire dans un plusieurs, on va exporter d'un coté pour importer la ou on se sert des composants

```js
// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Coucou</h1>
    </header>
  );
}

export default Header;
```

On peut aussi écrire la fonction en fléché

```js
// Header.js
import React from 'react';

const Header = () => (
  <header>
    <h1>Coucou</h1>
  </header>
);

export default Header;
```

Ailleurs dans un autre composant je peux importer le premier

```jsx
// App.js
import React from 'react';

import Header from './chemin/vers/Header';

const App = () => (
  <div>
    <Header />
    <p>Hello world</p>
  </div>
);

export default App;
```

## SASS

Sass est un preprocessor CSS qui nous permet d'écrire du CSS avec des syntaxes supplémentaires, nos fichiers seront analysés par l'outil Sass et transformés en CSS. Avec Webpack ça se fait de manière transparente au moment du build.

On va utiliser la syntaxe SCSS, il existe aussi la syntaxe SASS sans accolade et sans point virgule.

```css
.content {
  background-color: grey,
}

.content-title {
  color: red;
  font-size: 2em;
}

.content-description {
  font-size: 1.2em,
}
```

```scss
// en scss déjà on peut faire des commentaires sur une ligne
// on peut imbriquer des selecteurs
.content {
  background-color: grey;

  .content-title { // .content .content-title
    color: red;
    font-size: 2em;
  }

  .content-description { // .content .content-description
    font-size: 1.2em;
  }
}


// on peut éviter de générer des selecteurs trop longs avec &
// & sera remplacé par le selecteur parent
.content {
  background-color: grey;

  &-title { // .content-title
    color: red;
    font-size: 2em;
  }

  &-description { // .content-description
    font-size: 1.2em;
  }
}
```

Il n'y a pas de limite au niveau d'imbrication

```scss

div {
  h1 { // div h1
    color: orange;

    span { // div h1 span
      color: red;
    }
  }
}
```

## Les petits à coté de la journée

### `::before / ::after`

Il s'agit de 2 pseudo elements css, c'est à dire des selecteurs qui permettent de cibler un élement qui n'existe pas vraiment, c'est comme si on ciblait un span en début (before) ou en fin (after) de balise

Ce sera pratique pour ajouter des élement purement décoratif

Pour que le selecteur ait un effet on doit obligatoirement préciser une propriété content

```css
.element::before {
  content: '*';
  color: red;
}

/* Si on ne veut pas mettre de texte on doit mettre une chaine vide */
.item::after {
  content: '';
  height: 1px;
  width: 20px;
  background-color: #F18042;
  display: inline-block;
}
```
