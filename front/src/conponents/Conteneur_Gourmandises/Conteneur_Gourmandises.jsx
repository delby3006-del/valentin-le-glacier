import { useEffect, useState } from "react";
import "./Conteneur_Gourmandises.css";

export default function Conteneur_Gourmandises() {
  const [gourmandisesActives, setGourmandisesActives] = useState([]);

  useEffect(() => {
    const chargerGourmandises = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/gourmandises");

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();
        console.log("Données gourmandises :", data);
        setGourmandisesActives(data);
      } catch (error) {
        console.error("Erreur gourmandises :", error);
      }
    };

    chargerGourmandises();

    const interval = setInterval(chargerGourmandises, 65000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gourmandises" id="section-gourmandises">
      <h3 className="titre-conteneur-gourmandises">Nos Gourmandises</h3>

      <div className="conteneur-gourmandises">
        {gourmandisesActives.map((gourmandise) => (
          <div
            className="carte-gourmandises"
            key={gourmandise.id_gourmandise_type}
          >
            <h4 className="carte-gourmandises-titre">
              {gourmandise.nom_gourmandise_type}
            </h4>

            <ul>
              {gourmandise.garnitures.map((garniture) => (
                <li key={garniture.id_garniture}>{garniture.nom_garniture}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
