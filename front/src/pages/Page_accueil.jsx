import Conteneur_Presentation from "../conponents/Conteneur_Presentation/Conteneur_Presentation";
import BandeauDefilant from "../conponents/Bandeau_Deroulant/Bandeau_Deroulant";
import Conteneur_Histoire from "../conponents/Conteneur_Histoire/Conteneur_Histoire";

export default function Page_accueil() {
  return (
    <div>
      <Conteneur_Presentation />
      <BandeauDefilant />
      <Conteneur_Histoire />
    </div>
  );
}
