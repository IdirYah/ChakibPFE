import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">LOGO PFE CHAKIB</div>
    <nav>
      <Link to='/'>Accueil</Link>
      <Link to='/inscription'>Rejoignez-nous</Link>
    </nav>
  </header>
);

export default Header;