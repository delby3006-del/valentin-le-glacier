// import "./Conteneur_Admin_Glaces_Creme.css";
import { useEffect, useState } from "react";

export default function GlacesCremesAdmin() {
  const [glaces, setGlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const chargerGlaces = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/glaces");

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await response.json();
        setGlaces(data);
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger les crèmes glacées");
      } finally {
        setLoading(false);
      }
    };

    chargerGlaces();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;

  const cremes = glaces
    .filter((glace) => glace.nom_type === "Crème glacée")
    .sort((a, b) => a.nom_glace.localeCompare(b.nom_glace, "fr"));

  return (
    <div className="bloc-admin-glaces">
      <h3 className="titre-admin-conteneur-glaces">🍦 Crèmes Glacées</h3>

      {cremes.length === 0 ? (
        <p>Aucune crème trouvée</p>
      ) : (
        <ul className="conteneur-admin-glaces-liste">
          {cremes.map((glace) => (
            <li key={glace.id_glace}>{glace.nom_glace}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
