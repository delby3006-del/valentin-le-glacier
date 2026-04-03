import "./App.css";
import Header from "./conponents/Haeder/Header.jsx";
import Page_accueil from "./pages/Page_accueil.jsx";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Page_accueil />
      </div>
    </div>
  );
}
export default App;
