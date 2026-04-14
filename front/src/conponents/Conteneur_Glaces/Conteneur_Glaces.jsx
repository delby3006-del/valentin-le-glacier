import "./Conteneur_Glaces.css";
import GlacesCremesActives from "../Conteneur_Glaces_Creme/Conteneur_Glaces_Creme";
import GlacesSorbetActives from "../Conteneur_Glaces_Sorbet/Conteneur_Glaces_Sorbet";

export default function Conteneur_Glaces() {
  return (
    <section className="conteneur-glaces" id="conteneur-glaces">
      <div className="conteneur-glaces-fond">
        <div className="conteneur-glaces-colone">
          <h2 className="titre-conteneur-glaces">NOTRE SÉLECTION</h2>
          <h3 className="text-conteneur-glaces">Nos Parfums du Moment</h3>
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
    </section>
  );
}
