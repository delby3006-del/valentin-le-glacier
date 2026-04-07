import "./Conteneur_Presentation_Text.css";

export default function Conteneur_Presentation_Text() {
  return (
    <div className="conteneur-presentation-text">
      <h1 className="titre-presentation">
        Valentin <br />
        <span className="titre-secondary">le glacier</span>
      </h1>
      <h2 className="description-presentation">
        Des glaces & sorbets <br className="description-secondary" />
        100% biologiques & artisanales
      </h2>
      <p className="description-text">
        Au cœur de Limoges, nous vous accueillons avec des créations glacées
        façonnées artisanalement, avec des ingrédients certifiés bio
        soigneusement choisis.
      </p>
      <button className="btn-decouvrir">Voir notre carte</button>
    </div>
  );
}
