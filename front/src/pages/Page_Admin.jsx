import Header from "../conponents/Haeder/Header";
import Conteneur_Admin_Glaces from "../conponents/Conteneur_Admin_Glaces/Conteneur_Admin_Glaces";

export default function Page_admin() {
  return (
    <div>
      <Header mode="admin" />
      <Conteneur_Admin_Glaces />
    </div>
  );
}
