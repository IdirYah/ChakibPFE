import './AppFolder/index.css';
import Background from './AppFolder/background.jsx';
import Landingpage from './AppFolder/LandingPage.jsx';
import ButtonLanding from './AppFolder/ButtonLanding.jsx';
import Footeer from './AppFolder/Footeer.jsx';

function App() {
    return (
        <body className='bodyApp'>
          <Background/>
          <Landingpage/>
          <ButtonLanding/> 
          <Footeer/>
          
        </body>
    )
}

export default App
