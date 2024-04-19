import dotenv from "dotenv";

// Configura dotenv
dotenv.config();

// Exporta las variables de entorno que necesitas
export const PORT = process.env.PORT || 8080;
export const MONGO_URL = process.env.MONGO_DB_URL;
