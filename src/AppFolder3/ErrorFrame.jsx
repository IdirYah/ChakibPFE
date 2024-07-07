import ErrorImg from '../assets/ErrorImg.png'
const ErrorFrame = () => {
    return (
        <div>
            <h1>Erreur 404</h1>
            <p>Oh! Vous êtes perdu. la page que vous recherchez n'existe pas. </p>
           <p> Cliquez sur le bouton ci-dessous pour revenir à la page d'accueil</p>
           <a href="#">Accueil</a>
            <img src={ErrorImg} alt="ErrorImg" />
        </div>
    );
}
export default ErrorFrame;