const express = require("express");
const app = express();
const rutas = require("./routes");

app.use(express.json());
app.use("/api", rutas);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
