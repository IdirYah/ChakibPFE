import './camion.css';
import camionimg from '../../assets/image 13.png';
import qrcode from '../../assets/Qrcode1 1.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Camion() {
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
    axios.get('https://point-control-app.onrender.com/api/web/getInfo') 
      .then(response => {
        setResponse(response);
      })
      .catch(error => {
        console.log(error)
      });
  }, []); 
  const handleDelete = async(id,e) => {
    console.log(id)
    await axios.delete('https://point-control-app.onrender.com/api/web/camion/deleteCamion',
      {data:{"camion_id": id}}
    )
      .then((response) => {
        setMessage(response)
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }; 
  return (
      <>
      {response && response.data.camions.map((camion, index) => (
        <div className='kolch' key={camion.camion_id}>
         <div className='camion'>
          <div className='colonne'>
            <p className='input'>Contrôle Technique Véhicule</p>
            <p className='input'>Numéro / Date</p>
            <p className='reponse'>{camion.num_ctrl_tech_camion}</p>
            <p className='reponse'>{camion.date_ctrl_tech_camion}</p>
          </div>
          <div className='colonne'>
            <p className='input'>Numéro Carte Grise</p>
            <p className='reponse'>{camion.num_carte_grise}</p>
          </div>
          <div className='colonne'>
            <p className='input'>Type Camion</p>
            <p className='reponse'>{camion.type_camion}</p>
          </div>
          <div className='colonne'>
            <img src={camionimg} alt=''/>
            <img src={camion.qr_code} alt=''/>
          </div>
        </div>
        <div className='deleteCamion'>
          <button type='button' onClick={(e) => handleDelete(camion.camion_id,e)}>Supprimer</button>
        </div>
        </div>
      ))}
      </>
    )
}
export default Camion;