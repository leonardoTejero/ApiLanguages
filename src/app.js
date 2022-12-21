import express from "express";
import morgan from "morgan";
// const express = require("express");
// const morgan = require("morgan");

// Routes
import languajeRoutes from "./routes/languages.routes.js";
// const languajeRoutes = require("./routes/languajes.routes");

const app = express();

// Settingsrs
app.set("port", 4000);

// Middleware  
// Detalle de las peticiones en consola
app.use(morgan("dev"));
// Para que reconozca json
app.use(express.json());

//Routes
app.use("/api/languajes", languajeRoutes);

// exportar para usar en index.js
export default app;