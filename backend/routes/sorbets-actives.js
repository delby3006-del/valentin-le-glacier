const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const sql = `
    SELECT g.id_glace, g.nom_glace, g.bio, g.actif, t.nom_type
    FROM glaces g
    JOIN types t ON g.id_type = t.id_type
    WHERE g.actif = 1
      AND t.nom_type = 'Sorbet'
    ORDER BY g.nom_glace ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erreur SQL :", err.message);
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
