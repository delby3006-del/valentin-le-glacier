const express = require("express");
const cors = require("cors");

const glacesRoutes = require("./routes/glaces");
const granitesRoutes = require("./routes/granites");
const machinesRoutes = require("./routes/machines");
const parfumsItaliennesRoutes = require("./routes/parfumsItaliennes");
const italiennesRoutes = require("./routes/italiennes");
const cremesActivesRoutes = require("./routes/cremes-actives");
const sorbetsActivesRoutes = require("./routes/sorbets-actives");
const gourmandisesRoutes = require("./routes/gourmandises");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/glaces", glacesRoutes);
app.use("/api/granites", granitesRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/api/parfums-italiennes", parfumsItaliennesRoutes);
app.use("/api/italiennes", italiennesRoutes);
app.use("/api/cremes-actives", cremesActivesRoutes);
app.use("/api/sorbets-actives", sorbetsActivesRoutes);
app.use("/api/gourmandises", gourmandisesRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`→ Local     : http://localhost:${PORT}`);
});
