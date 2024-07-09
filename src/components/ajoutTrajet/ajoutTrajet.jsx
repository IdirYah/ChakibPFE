import React,{useState,useEffect} from 'react';
import './ajoutTrajet.css';
import axios from 'axios';

function AjoutTrajet({onclose}) {
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [numAttestation,setNumAttestation] = useState('');
    const [numBrevet,setNumBrevet] = useState('');
    const [source,setSource] = useState('');
    const [destination,setDestination] = useState('');
    const [dateDepart,setDateDepart] = useState('');
    const [heureDepart,setHeureDepart] = useState('');
    const [dateArrivee,setDateArrivee] = useState('');
    const [heureArrivee,setHeureArrivee] = useState('');
    const [classe,setClasse] = useState('');
    const [type,setType] = useState('');
    const [codeClassification,setCodeClassification] = useState('');
    const [quantite,setQuantite] = useState('');
    const [emballage,setEmballage] = useState('');
    const [codeTunnel,setCodeTunnel] = useState('');
    const [danger,setDanger] = useState('');
    const [onu,setOnu] = useState('');
    const [numCiterne,setNumCiterne] = useState('');
    const [dateCiterne,setDateCiterne] = useState('');
    const [assuranceCiterne,setAssuranceCiterne] = useState('');
    const [dateAssuranceCiterne,setDateAssuranceCiterne] = useState('');
    const [matiere,setMatiere] = useState('');
    const [base64Image, setBase64Image] = useState('');
    const [image,setImage] = useState('');
    const [message,setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Veuillez choisir un camion selon le numéro de carte grise');
    const [selectedId, setSelectedId] = useState('');
    const [Response,setResponse] = useState('');
    useEffect(() => {
    
      const token = localStorage.getItem('jwt-token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
      axios.get('https://point-control-app.onrender.com/api/web/getInfo') 
        .then(response => {
          setResponse(response);
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        });
    }, []);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (option1,option2) => {
      setSelectedOption(option1);
      setSelectedId(option2);
      setIsOpen(false);
    };
    
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    const handleImage = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    const handleaddTrajet = async (e) => {
      const token = localStorage.getItem('jwt-token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      e.preventDefault();
      const data = {
        "camion_id": selectedId,
        "chauffeurs": [
            {
                "nom": nom,
                "prenom": prenom,
                "num_attestation": numAttestation,
                "num_brevet_matiere_dangeureuse": numBrevet,
                "photo_conducteur": base64Image,
                "source": source,
                "destination": destination,
                "date_heure_sortie": `${dateDepart} ${heureDepart}`,
                "date_heure_arrive_prevu": `${dateArrivee} ${heureArrivee}`
            }
        ],
        "matieres": [
            {
                "nom" : matiere,
                "class": classe,
                "pictogramme": image,
                "type": type,
                "code_classification": codeClassification,
                "quantite": quantite,
                "grp_emballage": emballage,
                "code_restriction_tunnel": codeTunnel,
                "code_danger": danger,
                "num_onu": onu,
                "num_ctrl_tech_citerne": numCiterne,
                "date_ctrl_tech_citerne": dateCiterne,
                "num_assurance_citerne": assuranceCiterne,
                "date_assurance_citerne": dateAssuranceCiterne
            }
        ]
    }
    console.log(base64Image);
    console.log(image)
      await axios.post('https://point-control-app.onrender.com/api/web/trajet/addTrajet', data)
      .then(response => {
        setMessage(response.data);
        console.log(response.data);
        window.location.reload();
        onclose();
      })
      .catch(error => {
        onclose();
        if (error.response) {
          setMessage('Invalid credentials');
        } else {
          setMessage('An error occurred. Please try again.');
        }
    })};
  return (
    <>
    <div className="container">
      <h1>Ajouter un Trajet</h1>
      <div className="form-container">
        <div className="form-section">
          <h2>Chauffeur <button className="add-btn">+</button> Ajouter un Chauffeur</h2>
            <label>Nom</label><br/>
            <input type="text" onChange={(e)=>setNom(e.target.value)}/><br/>

            <label>Prénom</label><br/>
            <input type="text" onChange={(e)=>setPrenom(e.target.value)}/><br/>

            <label>Numéro d'Attestation de Travail</label><br/>
            <input type="text" onChange={(e)=>setNumAttestation(e.target.value)}/><br/>

            <label>Numéro du Brevet Matière Dangereuse</label><br/>
            <input type="text" onChange={(e)=>setNumBrevet(e.target.value)}/><br/>

            <label>Photo du Conducteur</label><br/>
            <input type="file" onChange={handleImageUpload}/><br/>

            <label>Source</label><br/>
            <input type="text" onChange={(e)=>setSource(e.target.value)}/><br/>

            <label>Date de Départ</label><br/>
            <input type="text" onChange={(e)=>setDateDepart(e.target.value)}/><br/>

            <label>Heure de Départ</label><br/>
            <input type="text" onChange={(e)=>setHeureDepart(e.target.value)}/><br/>

            <label>Destination</label><br/>
            <input type="text" onChange={(e)=>setDestination(e.target.value)}/><br/>

            <label>Date d'Arrivée Prévu</label><br/>
            <input type="text" onChange={(e)=>setDateArrivee(e.target.value)}/><br/>

            <label>Heure d'Arrivée Prévu</label><br/>
            <input type="text" onChange={(e)=>setHeureArrivee(e.target.value)}/><br/>
        </div>
        
        <div className="form-section">
          <h2>Matière <button className="add-btn">+</button> Ajouter un Matière</h2>
            <label>Nom de la matière</label><br/>
            <input type="text" onChange={(e)=>setMatiere(e.target.value)}/><br/>
            
            <label>Classe</label><br/>
            <input type="text" onChange={(e)=>setClasse(e.target.value)}/><br/>

            <label>Pictogramme</label><br/>
            <input type="file" onChange={handleImage}/><br/>

            <label>Type</label><br/>
            <input type="text" onChange={(e)=>setType(e.target.value)}/><br/>

            <label>Code Classification</label><br/>
            <input type="text" onChange={(e)=>setCodeClassification(e.target.value)}/><br/>

            <label>Quantité</label><br/>
            <input type="text" onChange={(e)=>setQuantite(e.target.value)}/><br/>

            <label>Groupe d'Emballage</label><br/>
            <input type="text" onChange={(e)=>setEmballage(e.target.value)}/><br/>

            <label>Code Restriction tunnel</label><br/>
            <input type="text" onChange={(e)=>setCodeTunnel(e.target.value)}/><br/>

            <label>Code Danger</label><br/>
            <input type="text" onChange={(e)=>setDanger(e.target.value)}/><br/>

            <label>Numéro onu</label><br/>
            <input type="text" onChange={(e)=>setOnu(e.target.value)}/><br/>

            <label>Numéro Controle Technique</label><br/>
            <input type="text" onChange={(e)=>setNumCiterne(e.target.value)}/><br/>

            <label>Date Controle Technique</label><br/>
            <input type="text" onChange={(e)=>setDateCiterne(e.target.value)}/><br/>

            <label>Numéro d'Assurance</label><br/>
            <input type="text" onChange={(e)=>setAssuranceCiterne(e.target.value)}/><br/>

            <label>Date d'Assurance</label><br/>
            <input type="text" onChange={(e)=>setDateAssuranceCiterne(e.target.value)}/><br/>

            <button onClick={toggleDropdown} className="dropdown-toggle">
              <p>{selectedOption}</p>
            </button>
            {isOpen && (
            <ul className="dropdown-menu">
              {Response && Response.data.camions.map((camion, index) => (
                <li onClick={() => handleOptionClick(camion.num_carte_grise,camion.camion_id)} key={index}>{camion.num_carte_grise}</li>
              ))}
            </ul>
            )}
        </div>
      </div>
      <button type='button' className="submit-btn" onClick={handleaddTrajet}>Ajouter</button>
    </div>
  </>
  )};

export default AjoutTrajet;