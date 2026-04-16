import "./Conteneur_Glaces_Creme.css";
import { useEffect, useState } from "react";

export default function GlacesCremesActives() {
  const [glaces, setGlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const chargerGlaces = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/cremes-actives",
        );

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await response.json();
        setGlaces(data);
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger les glaces crème actives");
      } finally {
        setLoading(false);
      }
    };

    chargerGlaces();

    const interval = setInterval(() => {
      chargerGlaces();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;
  return (
    <div className="conteneur-glaces-creme">
      <div className="conteneur-glaces-creme-colone">
        <h3 className="titre-conteneur-glaces-creme">🍦 Crèmes Glacées</h3>
        <ul className="conteneur-glaces-creme-liste">
          {glaces.map((glace) => (
            <li key={glace.id_glace}>{glace.nom_glace}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
