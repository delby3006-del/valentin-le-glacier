import "./Conteneur_Glaces.css";
import GlacesCremesActives from "../Conteneur_Glaces_Creme/Conteneur_Glaces_Creme";
import GlacesSorbetActives from "../Conteneur_Glaces_Sorbet/Conteneur_Glaces_Sorbet";

export default function Conteneur_Glaces() {
  return (
    <div className="conteneur-glaces">
      <div className="conteneur-glaces-fond">
        <div className="conteneur-glaces-colone">
          <h2 className="titre-conteneur-glaces">NOTRE SÉLECTION</h2>
          <p className="text-conteneur-glaces">Nos Parfums du Moment</p>
          <p className="bio-conteneur-glaces">
            🌿 Agriculture Biologique certifiée
          </p>
          <section className="section-conteneur-glaces">
            <div className="conteneur-glaces-parfumes">
              <GlacesCremesActives />
            </div>

            <div className="conteneur-glaces-parfumes">
              <GlacesSorbetActives />
            </div>
          </section>
          <div className="conteneur-glaces-emporter">
            <p className="text-conteneur-glaces-emporter">
              📦 PLUS UN LARGE CHOIX ½ LITRE À EMPORTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
