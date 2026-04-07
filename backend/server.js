const express = require("express");
const cors = require("cors");

const glacesRoutes = require("./routes/glaces");
const granitesRoutes = require("./routes/granites");
const machinesRoutes = require("./routes/machines");
const parfumsItaliennesRoutes = require("./routes/parfumsItaliennes");
const italiennesRoutes = require("./routes/italiennes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/glaces", glacesRoutes);
app.use("/api/granites", granitesRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/api/parfums-italiennes", parfumsItaliennesRoutes);
app.use("/api/italiennes", italiennesRoutes);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
