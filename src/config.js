// Extraer los valores de archivo env.js
import {config} from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    database : process.env.DATABASE || "",
    user : process.env.USER || "",
    password : process.env.PASSWORD || ""
};