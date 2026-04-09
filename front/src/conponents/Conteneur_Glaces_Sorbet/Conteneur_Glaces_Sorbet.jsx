import "./Conteneur_Glaces_Sorbet.css";
import { useEffect, useState } from "react";

export default function GlacesSorbetActives() {
  const [glaces, setGlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const chargerGlaces = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.14:3001/api/sorbets-actives",
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
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;
  return (
    <div className="conteneur-glaces-sorbet">
      <div className="conteneur-glaces-sorbet-colone">
        <h3 className="titre-conteneur-glaces-sorbet">🍋 Sorbets</h3>
        <ul className="conteneur-glaces-sorbet-liste">
          {glaces.map((glace) => (
            <li key={glace.id_glace}>{glace.nom_glace}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
