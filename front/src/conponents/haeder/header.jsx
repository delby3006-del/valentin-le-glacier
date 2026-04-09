import "./Header.css";
import Coordonnees from "../Coordonnees/Coordonnes.jsx";
export default function Header() {
  return (
    <div>
      <div className="header-coordonnee">
        <Coordonnees showTelephone={false} />
        <p className="info-header">🌿 Glaces & Sorbets 100% BIO · Artisanaux</p>
        <Coordonnees showAdresse={false} />
      </div>
      <div className="barre-nav">
        <div className="logo-valentin">
          <img src="/images/logo_valentin.png" alt="Logo valentin le glacier" />
        </div>
        <nav className="nav" aria-label="Navigation principale">
          <a href="#">Notre Histoire</a>
          <a href="#">Nos Parfums</a>
          <a href="#">Nos Gourmandises</a>
          <a href="#">Boissons</a>
          <a href="#">Infos Pratiques</a>
          <p>🌿 100% BIO</p>
        </nav>
      </div>
    </div>
  );
}
