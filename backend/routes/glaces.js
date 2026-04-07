const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const sql = `
    SELECT g.id_glace, g.nom_glace, g.bio, g.actif, t.nom_type
    FROM glaces g
    JOIN types t ON g.id_type = t.id_type
    ORDER BY g.nom_glace ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

router.get("/actives", (req, res) => {
  const sql = `
    SELECT g.id_glace, g.nom_glace, g.bio, t.nom_type
    FROM glaces g
    JOIN types t ON g.id_type = t.id_type
    WHERE g.actif = 1
    ORDER BY g.nom_glace ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { nom_glace, id_type, bio, actif } = req.body;

  const sql = `
    INSERT INTO glaces (nom_glace, id_type, bio, actif)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [nom_glace, id_type, bio ?? 1, actif ?? 1], function (err) {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json({
      message: "Glace ajoutée",
      id_glace: this.lastID,
    });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nom_glace, id_type, bio, actif } = req.body;

  const sql = `
    UPDATE glaces
    SET nom_glace = ?, id_type = ?, bio = ?, actif = ?
    WHERE id_glace = ?
  `;

  db.run(sql, [nom_glace, id_type, bio, actif, id], function (err) {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json({ message: "Glace modifiée" });
  });
});

router.patch("/:id/actif", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `UPDATE glaces SET actif = ? WHERE id_glace = ?`;

  db.run(sql, [actif, id], function (err) {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json({ message: "Disponibilité modifiée" });
  });
});

module.exports = router;
