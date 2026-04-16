import "./Conteneur_Admin_Glaces.css";
import GlacesCremesAdmin from "../Conteneur_Admin_Glaces_Creme/Conteneur_Admin_Glaces_Creme";
import GlacesSorbetsAdmin from "../Conteneur_Admin_Glaces_Sorbet/Conteneur_Admin_Glaces_Sorbet";

export default function Conteneur_Glaces() {
  return (
    <section className="conteneur-admin-glaces" id="conteneur-glaces">
      <div className="conteneur-admin-glaces-fond">
        <div className="conteneur-admin-glaces-colone">
          <section className="section-admin-conteneur-glaces">
            <div className="conteneur-admin-glaces-parfumes">
              <GlacesCremesAdmin />
            </div>

            <div className="conteneur-admin-glaces-parfumes">
              <GlacesSorbetsAdmin />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
