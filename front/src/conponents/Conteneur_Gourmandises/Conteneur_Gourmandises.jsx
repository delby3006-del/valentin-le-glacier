import { useEffect, useState } from "react";
import "./Conteneur_Gourmandises.css";

const accompagnements = [
  "Nature",
  "Chantilly maison",
  "Pâte à tartiner * bio *",
  "Boule de glace",
  "Nutella",
  "Sauce chocolat maison",
];

const accompagementsCrepes = ["Sauce Caramel", "Miel artisanal"];

export default function Conteneur_Gourmandises() {
  const [gourmandisesActives, setGourmandisesActives] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/gourmandises")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données gourmandises :", data);
        setGourmandisesActives(data);
      })
      .catch((error) => console.error("Erreur gourmandises :", error));
  }, []);

  const afficherGaufre = gourmandisesActives.some(
    (item) =>
      item.nom_gourmandise?.toLowerCase().includes("gaufre") &&
      Number(item.actif) === 1,
  );

  const afficherCrepe = gourmandisesActives.some(
    (item) =>
      item.nom_gourmandise?.toLowerCase().includes("cr") &&
      Number(item.actif) === 1,
  );

  return (
    <section className="gourmandises" id="section-gourmandises">
      <h3 className="titre-conteneur-gourmandises">Nos Gourmandises</h3>
      <div className="conteneur-gourmandises">
        {afficherGaufre && (
          <div className="carte-gourmandises">
            <h4 className="carte-gourmandises-titre">Gaufre de Liège</h4>
            <ul>
              {accompagnements.map((item) => (
                <li key={`gaufre-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {afficherCrepe && (
          <div className="carte-gourmandises">
            <h4 className="carte-gourmandises-titre">Crêpe</h4>
            <ul>
              {[...accompagnements, ...accompagementsCrepes].map((item) => (
                <li key={`crepe-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
