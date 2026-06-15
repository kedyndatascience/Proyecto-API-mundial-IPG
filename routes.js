const express = require("express");
const router = express.Router();
let equipos = require("./data");

// GET → Listar todos los equipos
router.get("/equipos", (req, res) => {
  res.json(equipos);
});

// GET → Obtener un equipo por ID
router.get("/equipos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const equipo = equipos.find(e => e.id === id);

  if (!equipo) {
    return res.status(404).json({ error: "Equipo no encontrado" });
  }

  res.json(equipo);
});

// POST → Crear un nuevo equipo
router.post("/equipos", (req, res) => {
  const { equipo, grupo } = req.body;

  if (!equipo || !grupo) {
    return res.status(400).json({
      error: "Campos inválidos. Se requiere: equipo (string) y grupo (string)"
    });
  }

  const nuevoEquipo = {
    id: equipos.length + 1,
    equipo,
    grupo
  };

  equipos.push(nuevoEquipo);
  res.status(201).json(nuevoEquipo);
});

// PUT → Actualizar un equipo
router.put("/equipos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const equipo = equipos.find(e => e.id === id);

  if (!equipo) {
    return res.status(404).json({ error: "Equipo no encontrado" });
  }

  const { equipo: nombre, grupo } = req.body;

  if (!nombre || !grupo) {
    return res.status(400).json({
      error: "Campos inválidos. Se requiere: equipo (string) y grupo (string)"
    });
  }

  equipo.equipo = nombre;
  equipo.grupo = grupo;

  res.json(equipo);
});

// DELETE → Eliminar un equipo
router.delete("/equipos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = equipos.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Equipo no encontrado" });
  }

  const eliminado = equipos.splice(index, 1);
  res.json({ mensaje: "Equipo eliminado", equipo: eliminado[0] });
});

module.exports = router;
