// Importa las bibliotecas necesarias de Node.js y de terceros.
import express, { urlencoded } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import productsRouter from "./routes/products.routes.js";
config();

// Crea una instancia de la aplicación Express.
const app = express();

//! Configuración (Settings) de la aplicación.
// Establece el motor de vistas como 'ejs'.
app.set("view engine", "ejs");

//! Middleware (intermediario) de la aplicación.
// Permite el análisis de datos en formato JSON.
app.use(express.json());
// Permite el análisis de datos de formulario codificados en la URL.
app.use(express.urlencoded({ extended: false })); // Corregido
// Utiliza el middleware Morgan para el registro de solicitudes HTTP en modo 'dev'.
app.use(morgan("dev"));
app.use("/api/products", productsRouter);

// Exporta la instancia de la aplicación Express para su uso en otros archivos.
export default app;
