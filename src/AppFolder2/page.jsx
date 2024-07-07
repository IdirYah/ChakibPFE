import React,{useState} from 'react';
import image4 from '../assets/image4.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Page = () => {
  const [emailLogin,setEmail] = useState('');
  const [nameLogin,setName] = useState('');
  const [passwordLogin,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [message,setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('https://point-control-app.onrender.com/api/web/entreprise/registerEntreprise', {
      email: "hhh@gmail.com",
      name: "hhh",
      password: "hhh"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      localStorage.setItem('jwt-token', response.data.user.token);
      setMessage(response.data);
      console.log(response.data);
      const token = localStorage.getItem('jwt-token');
      console.log(token);
      window.location.href = '/listCamionTrajet';
    })
    .catch(error => {
      if (error.response) {
        setMessage('Invalid credentials');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="left-section">
          <h1>LOGO PFE CHAKIB</h1>
          <h2>S'inscrire</h2>
          <form onSubmit={handleSignup}>
          <label htmlFor="company-name"><i className="fa fa-building"></i> Nom de l'entreprise</label>
            <input type="text" id="company-name" name="company-name" value={nameLogin} onChange={(e)=>setName(e.target.value)} />

            <label htmlFor="email"><i className="fa fa-envelope"></i> E-mail</label>
            <input type="email" id="email" name="email" value={emailLogin} onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="password"><i className="fa fa-lock"></i> Mot de passe</label>
            <input type="password" id="password" name="password" value={passwordLogin} onChange={(e)=>setPassword(e.target.value)}/>

            <label htmlFor="confirm-password"><i className="fa fa-lock"></i> Répétez votre mot de passe</label>
            <input type="password" id="confirm-password" name="confirm-password" onChange={(e)=>setConfirmPassword(e.target.value)}/>

            <div className="checkbox">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">J'accepte toutes les déclarations concernant <a href="#">les conditions de service</a></label>
            </div>
            <button type="submit">S'inscrire</button>
            </form>
          <p>Vous êtes déjà un membre ? <a href="#"><Link to="/connection">Se connecter</Link></a></p>
        </div>
        <div className="right-section">
          <div className="navbar">
            <a href="#" ><Link to='/'>Accueil</Link></a>
            <a href="#">En savoir plus</a>
          </div>
          <div className="graphic-content">
            <img src={image4} alt="image4" className='img4'/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;