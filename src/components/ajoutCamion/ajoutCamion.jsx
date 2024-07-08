import React,{useState} from 'react';
import './ajoutCamion.css';
import axios from 'axios';

function AjoutCamion({onClose}) {
  const [typeCamion,settypeCamion] = useState('');
  const [numGrise,setnumGrise] = useState('');
  const [numTechnique,setnumTechnique] = useState('');
  const [dateTechnique,setdateTechnique] = useState('');
  const [message,setMessage] = useState('');

  const handleaddCamion = (e) => {
    const token = localStorage.getItem('jwt-token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    e.preventDefault();
    axios.post('https://point-control-app.onrender.com/api/web/camion/addCamion', {
      num_carte_grise: numGrise,
      type_camion: typeCamion,
      num_ctrl_tech_camion: numTechnique,
      date_ctrl_tech_camion: dateTechnique
    })
    .then(response => {
      setMessage(response.data);
      console.log(response.data);
      window.location.reload();
      onClose();
    })
    .catch(error => {
      onClose();
      if (error.response) {
        setMessage('Invalid credentials');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    });
  };
  return (
    <div className='globalCamion'>
      <div className='titre'>
        <p>Ajouter un Camion</p>
      </div>
      <div className='inputs-camion'>
        <input type='text' placeholder='Type du Camion' onChange={(e)=>settypeCamion(e.target.value)}></input>
        <input type='text' placeholder='Numéro Carte Grise' onChange={(e)=>setnumGrise(e.target.value)}></input>
        <input type='text' placeholder='Numéro Controle Technique du Camion' onChange={(e)=>setnumTechnique(e.target.value)}></input>
        <input type='text' placeholder='Date Controle Technique du Camion' onChange={(e)=>setdateTechnique(e.target.value)}></input>
      </div>
      <div className='button-camion'>
        <button type='button' onClick={handleaddCamion}><p>Ajouter</p></button>
      </div>
    </div>
  );
}

export default AjoutCamion;
