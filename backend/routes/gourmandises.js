const express = require("express");
const router = express.Router();
const db = require("../db");

// GET gourmandises actives + garnitures actives liées
router.get("/", (req, res) => {
  const sql = `
    SELECT
      gt.id_gourmandise_type,
      gt.nom_gourmandise_type,
      gt.actif AS gourmandise_active,
      g.id_garniture,
      g.nom_garniture,
      g.actif AS garniture_active
    FROM gourmandises_type gt
    LEFT JOIN gourmandises_type_garnitures gtg
      ON gt.id_gourmandise_type = gtg.id_gourmandise_type
    LEFT JOIN gourmandises_garnitures g
      ON gtg.id_garniture = g.id_garniture
    WHERE gt.actif = 1
      AND (g.actif = 1 OR g.id_garniture IS NULL)
    ORDER BY gt.nom_gourmandise_type ASC, g.nom_garniture ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erreur récupération gourmandises :", err);
      return res.status(500).json({ succes: false, erreur: err.message });
    }

    const gourmandisesMap = {};

    rows.forEach((row) => {
      const id = row.id_gourmandise_type;

      if (!gourmandisesMap[id]) {
        gourmandisesMap[id] = {
          id_gourmandise_type: row.id_gourmandise_type,
          nom_gourmandise_type: row.nom_gourmandise_type,
          actif: row.gourmandise_active,
          garnitures: [],
        };
      }

      if (row.id_garniture) {
        gourmandisesMap[id].garnitures.push({
          id_garniture: row.id_garniture,
          nom_garniture: row.nom_garniture,
          actif: row.garniture_active,
        });
      }
    });

    res.json(Object.values(gourmandisesMap));
  });
});

module.exports = router;
