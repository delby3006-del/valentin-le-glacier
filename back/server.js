const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Autoriser le front React à communiquer avec le back
app.use(cors());

// Pour lire le JSON envoyé depuis le front
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("API Valentin Le Glacier en ligne 🍦");
});

// Route API de test
app.get("/api/test", (req, res) => {
  res.json({
    message: "Le serveur fonctionne correctement",
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
