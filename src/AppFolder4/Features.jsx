import React from 'react';
import truckImage from '../assets/truck.png'; 
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png';

const Features = () => (
  <div className="features">
    <div className="feature-list">
    <div className="feature-item">
      <img src={icon1} alt="icon" />
      <p>Historique détaillé des trajets et des livraisons pour une meilleure traçabilité.</p>
    </div>
    <div className="feature-item">
      <img src={icon2} alt="icon" />
      <p>Intégration facile avec vos systèmes existants pour une gestion fluide.</p>
    </div>
    <div className="feature-item">
      <img src={icon3} alt="icon" />
      <p>Sécurisation des données</p>
    </div>
    </div>
    <img src={truckImage} alt="Truck" className="truck-image" />
  </div>
);
export default Features;
