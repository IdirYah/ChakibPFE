import React from 'react';
import qrCodeImage from '../assets/qr-code.png'; 
import icon4 from '../assets/icon4.png'; 
import icon5 from '../assets/icon5.png'; 
import icon6 from '../assets/icon6.png';

const QRCodeSection = () => (
  <div className="qr-code-section">
    <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
    <div className="qr-features">
      <div className="feature-item">
        <img src={icon4} alt="icon" />
        <p>Un QR code contenant toutes les informations de vos camions, chauffeurs et citernes.</p>
      </div>
      <div className="feature-item">
        <img src={icon5} alt="icon" />
        <p>Contrôle facile de vos trajets et camions avec une interface conviviale.</p>
      </div>
      <div className="feature-item">
        <img src={icon6} alt="icon" />
        <p>Votre outil pour numériser l'ensemble du processus de transport des matières dangereuses.</p>
      </div>
    </div>
  </div>
);

export default QRCodeSection;
