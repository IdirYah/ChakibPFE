import { Link } from 'react-router-dom';
const ButtonLanding = () => {
  return (
    <div>
      <Link to='/inscription'><button className="rejoignezbutton">Rejoignez nous</button></Link>
      <Link to='/savoirPlus'><button className="savoirbutton">En savoir plus  </button></Link>
    </div>
  );

} 
export default ButtonLanding;
