const Footeer = () => {
  return (
    <div className="footeer">
      <div className="footer-content">
        <div className="child">
          <p>À Propos de Nous</p>
          <div className="line">
          <p className="blog"> Ce site web est le résultat d'un projet de groupe collaboratif
         réalisé par FELLAHI Abderraouf, DAHMANI Mohamed Tariq,
          DARMOUNI Mohamed Amin, LOUZANI Mohamed Adam , YAHIAOUI Idir
          et BELKEDRA Chakib. Nous nous engageons à fournir des informations
          précises et fiables, et nous espérons que notre travail vous sera 
          utile et informatif. Merci de votre visite !</p>
          </div>
        </div>
        <div className="child">
          <p>Contactez-nous</p>
          <div className="contact">
            <p>Adresse :  10 Rue des Frères OUDEK, El Harrach,</p>
            <p>Téléphone : +213 123 456 789</p>
            <p>Email : support@example.com</p>
          </div>
        </div>
        <div className="child">
          <p>Liens Populaires</p>
          <div className="links">
            <p><a href="#">À Propos de Nous</a></p>
            <p><a href="#">Contactez-Nous</a></p>
            <p><a href="#">Politique de Confidentialité</a></p>
            <p><a href="#">Conditions d'Utilisation</a></p>
          </div>
        </div>
      </div>
      <hr className="hrFooter"></hr>
      <div className="footerDr">
      <p >Droits d'Auteur © Votre Entreprise | Tous droits réservés.</p>
      </div>
    </div>
  );
};
export default Footeer;