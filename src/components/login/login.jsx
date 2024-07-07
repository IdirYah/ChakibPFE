import React,{useState} from 'react';
import './login.css';
import image from '../../assets/Artboard 1@4x 1.png';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://point-control-app.onrender.com/api/web/entreprise/loginEntreprise', {
      email: email,
      password: password
    })
    .then(response => {
      localStorage.setItem('jwt-token', response.data.token);
      setMessage(response.data);
      console.log(response.data);
      const token = localStorage.getItem('jwt-token');
      console.log(token)
      if (token) {
        navigate('/listCamionTrajet');
      }
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
    <div className='global-login'>
      <p id='logo'>LOGO PFE CHAKIB</p>
      <div className='login'>
        <p id='text'>Se connecter</p>
        <div className='inputs-login'>
          <input type='email' placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Mot de passe' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='buttons-login'>
          <button type='button' onClick={handleLogin}><p>Se connecter</p></button>
          <p id='inscription'>Vous n'avez pas de compte ? <a href="#"><span><Link to="/inscription">S'inscrire</Link></span></a></p>
        </div>
        {message && <p className='message'>{message}</p>}
        <img src={image} alt=''className='img-login'/>
      </div>
    </div>
  );
}

export default Login;
