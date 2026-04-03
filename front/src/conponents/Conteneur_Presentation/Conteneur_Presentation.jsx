import "./Conteneur_Presentation.css";
import Conteneur_Presentation_Images from "../Conteneur_Presentation_Images/Conteneur_Presentation_Images";
import Conteneur_Presentation_Text from "../Conteneur_Presentation_text/Conteneur_Presentation_Text";

export default function Conteneur_Presentation() {
  return (
    <div className="conteneur-presentation">
      <Conteneur_Presentation_Images />
      <Conteneur_Presentation_Text />
    </div>
  );
}
