import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header-coordonnee">
        <p>📍 40, rue Jean Jaurès — 87 000 Limoges</p>
        <p className="info-header">🌿 Glaces & Sorbets 100% BIO · Artisanaux</p>
        <p>📞 tél : 05 55 57 47 33 </p>
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
        </nav>
        <p>🌿 100% BIO</p>
      </div>
    </div>
  );
}
