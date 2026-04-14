import "./Header.css";
import Coordonnees from "../Coordonnees/Coordonnes.jsx";
export default function Header() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });

    // enlève le # de l'URL
    window.history.replaceState(null, "", window.location.pathname);
  };

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
          <a
            href="#conteneur-histoire"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("conteneur-histoire");
            }}
          >
            Notre Histoire
          </a>

          <a
            href="#conteneur-glaces"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("conteneur-glaces");
            }}
          >
            Nos Parfums
          </a>

          <a
            href="#section-gourmandises"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("section-gourmandises");
            }}
          >
            Nos Gourmandises
          </a>

          <a href="#">Boissons</a>
          <a href="#">Infos Pratiques</a>
          <p>🌿 100% BIO</p>
        </nav>
      </div>
    </div>
  );
}
