// Conexion
import config from "./../config.js";
import mysql from "mysql";
// let mysql = require("mysql");

// Crear conexion
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

// Validar conexion
connection.connect((error) => {
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
});

const getConnection = () => {
    return connection;
};

// module.exports.getConexion = getConnection;
export default getConnection;