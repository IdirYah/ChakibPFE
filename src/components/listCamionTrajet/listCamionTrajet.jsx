import React, { useState, useEffect } from 'react';
import './listCamionTrajet.css';
import image from '../../assets/image 9.png';
import Camion from '../../components/camion/camion.jsx';
import Trajet from '../../components/trajet/trajet.jsx';
import AjoutCamion from '../../components/ajoutCamion/ajoutCamion.jsx';
import AjoutTrajet from '../../components/ajoutTrajet/ajoutTrajet.jsx';
import axios from 'axios';
import logo from '../../assets/Plan_de_travail_3_copie_2-removebg-preview.png'

function ListCamionTrajet() {
  const [isAjoutCamionOpen, setIsAjoutCamionOpen] = useState(false);
  const [isAjoutTrajetOpen, setIsAjoutTrajetOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.get('https://point-control-app.onrender.com/api/web/getInfo') 
      .then(response => {
        setMessage(response.data);
        console.log(response.data);
      })
      .catch(error => {
        if (error.response) {
          setMessage('Invalid credentials');
        } else {
          setMessage('An error occurred. Please try again.');
        }
      });
  }, []); 

  const scrollToCamions = (e) => {
    e.preventDefault();
    const section = document.querySelector('.camions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToTrajets = (e) => {
    e.preventDefault();
    const section = document.querySelector('.trajets');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const openAjoutCamion = () => {
    setIsAjoutCamionOpen(true);
  };

  const closeAjoutCamion = () => {
    setIsAjoutCamionOpen(false);
    ListCamionTrajet();
  };

  function openAjoutTrajet() {
    setIsAjoutTrajetOpen(true);
  }

  const closeAjoutTrajet = () => {
    setIsAjoutTrajetOpen(false);
  };

  return (
        <div className={`global ${isAjoutCamionOpen ? 'blurred' : 'normal'}`}>
          <div className='navbar-list'>
            <img src={logo} id='logo'/>
            <div className='links-list'>
              <a href="/"> Acceuil </a>
              <a href='#' onClick={scrollToCamions}>Vos Camions</a>
              <a href='#' onClick={scrollToTrajets}>Vos Trajets</a>
            </div>
            <img src={image} alt=''/>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="63%" height="1" viewBox="0 0 1210 1" fill="none">
            <path d="M0 0.5H1210" stroke="white" stroke-opacity="0.2"/>
          </svg>
          <div className='camions'>
            <p id='id1'>Vos Camions</p>
            <div className='listCamion'>
              <Camion />
              <div className='buttonCamion'>
                <button type='button' id='ajout'onClick={openAjoutCamion}><p>Ajouter un camion</p></button>
              </div>
              {isAjoutCamionOpen && (
              <div className='exception'>
                <div className="overlay" onClick={closeAjoutCamion}></div>
                <div className="modal">
                  <AjoutCamion onClose={closeAjoutCamion} />
                </div>
              </div>
              )}
            </div>
          </div>
          <div className='trajets'>
            <p id='id2'>Vos Trajets</p>
            <div className='listTrajet'>
              <Trajet />
              <div className='buttonTrajet'>
                <button type='button' id='ajout1' onClick={openAjoutTrajet}><p>Ajouter un trajet</p></button>
              </div>
              {isAjoutTrajetOpen && (
              <div className='exception'>
                <div className="overlay" onClick={closeAjoutTrajet}></div>
                <div className="modal">
                  <AjoutTrajet onClose={closeAjoutTrajet} />
                </div>
              </div>
              )}
            </div>
          </div>
          <div className='footer'></div>
        </div>
      );
}
    

export default ListCamionTrajet;
