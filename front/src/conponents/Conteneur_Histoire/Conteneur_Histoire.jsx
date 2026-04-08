import "./Conteneur_Histoire.css";

export default function Conteneur_Histoire() {
  return (
    <div className="Conteneur_Histoire">
      <h2 className="titre-conteneur-histoire">
        Bienvenue chez Valentin le Glacier à Limoges
      </h2>
      <h3 className="sous-titre-conteneur-histoire">Notre histoire</h3>
      <img src="/images/logo_valentin.png" alt="Logo valentin le glacier" />
      <p className="Notre-histoire">
        dans le domaine du commerce depuis 1992, une nouvelle opportunité c'est
        ouverte a moi, j'ai donc fait une reconversion professionnelle et en
        juillet 2018 la boutique “Valentin le glacier" à Limoges a vus le jour.
        a la recherche de fournisseur de crème glacées et de sorbet BIO, nous
        avons decouvert “terre adélice”.
      </p>
      <h3 className="sous-titre-conteneur-histoire">Terra Délice</h3>
      <img src="/images/logo_terreadelice.png" alt="Logo terre adélice" />
      <p className="Notre-histoire">
        Terre adélice est une entreprise engagée pour la préservation de
        l’environnement et la valorisation de l’humain au cœur de son activité.
        Cet engagement se traduit au quotidien par des actes concrets : choix de
        l’agriculture biologique, coopération avec des producteurs locaux,
        écoconception des emballages, utilisation d’électricité 100 %
        renouvelable, réduction des déchets.
      </p>
    </div>
  );
}
