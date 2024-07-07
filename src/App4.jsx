import React from 'react';
import './AppFolder4/index4.css'
import Header from './AppFolder4/Header.jsx';
import Features from './AppFolder4/Features.jsx';
import QRCodeSection from './AppFolder4/QRCodeSection.jsx';
import Footeer from './AppFolder/Footeer.jsx';

function App4() {
  return (
    <>
    <div className="App">
    <Header />
    <div className="content">
      <Features />
      <QRCodeSection />
    </div>
    </div>
    <Footeer/>
    </>
  )
}

export default App4