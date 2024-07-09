import './trajet.css';
import lieu from '../../assets/image 16.png';
import danger from '../../assets/sifr_eda10n41_1_std.lang.all 1.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Trajet() {
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
  const handleDeleteTrajet = async(id,e) => {
    console.log(id)
    await axios.delete('https://point-control-app.onrender.com/api/web/trajet/deleteTrajet',
      {data:{"camion_id": id}}
    )
      .then((response) => {
        setMessage(response)
        console.log(response)
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }; 
  return (
    <>
      {response && response.data.camions.map((camion, index) => {
        if (camion.nbrCiterne) {
          return (
            <div className='tout' key={camion.camion_id}>
            <div className='trajet'>
              <div className='lieu-trajet'>
                <div className='colonne-trajet'>
                  <p className='input-trajet'>Date et Heure d’Arrivée prévu</p>
                  <p className='reponse-trajet'>{camion.chauffeurs[0].date_heure_arrive_prevu}</p>
                  <p className='reponse-trajet'></p>
                </div>
                <div className='colonne-trajet'>
                  <p className='input-trajet'>Date et Heure Départ</p>
                  <p className='reponse-trajet'>{camion.chauffeurs[0].date_heure_sortie}</p>
                  <p className='reponse-trajet'></p>
                </div>
                <div className='colonne-trajet'>
                  <p className='input-trajet' id='destination'>Destination</p>
                  <p className='reponse-trajet' id='ville'>{camion.chauffeurs[0].destination}</p>
                </div>
                <div className='colonne-trajet'>
                  <img src={lieu} alt=''/>
                </div>
              </div>
              <div className='image-trajet'>
              </div>
              <div className='chauffeur-trajet'>
                <div className='colonne-trajet'>
                  <p className='input-trajet'>Nombre de citernes</p>
                  <p className='reponse-trajet'>{camion.nbrCiterne}</p>
                </div>
                <div className='colonne-trajet'>
                  <p className='input-trajet'>Le(s) chauffeur(s)</p>
                      <p className='reponse-trajet'>{camion.chauffeurs[0].nom_complet}</p>
                      {camion.chauffeurs.length > 1 && (
                        <>
                          {camion.chauffeurs.slice(1).map((chauffeur, index) => (
                            <p className='reponse-trajet' key={index}>{chauffeur.nom_complet}</p>
                          ))}
                        </>
                      )}
                </div>
                <div className='colonne-trajet'>
                  {camion.matieres.map((image,index)=>(
                    <img key={index} src={image.pictogramme} alt='' id='image'/>
                  ))}
                </div>
              </div>
            </div>
            <div className='deleteTrajet'>
              <button type='button' onClick={(e) => handleDeleteTrajet(camion.camion_id,e)}>Supprimer</button>
            </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default Trajet;
