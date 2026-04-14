const express = require("express");
const router = express.Router();
const db = require("../db");

// GET toutes les gourmandises
router.get("/", (req, res) => {
  const sql = "SELECT * FROM gourmandises";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
