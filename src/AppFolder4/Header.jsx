import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Plan_de_travail_3_copie_3-removebg-preview.png';

const Header = () => (
  <header className="header">
    <div className="logo"><img src={logo}/></div>
    <nav>
      <Link to='/'>Accueil</Link>
      <Link to='/inscription'>Rejoignez-nous</Link>
    </nav>
  </header>
);

export default Header;