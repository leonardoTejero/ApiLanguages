
import conexion from "../database/database.js";

const getLanguages = async (req, res) => {
    try{
        const connection = conexion();
        connection.query('SELECT id, nombre, programadores FROM lenguajes', (error, results) => {
            
            if(error) throw error;
            res.send(results);
        });
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
};

const getLanguage = async (req, res) => {
    try{
        const {id} = req.params;
        const connection = conexion();
        connection.query('SELECT id, nombre, programadores FROM lenguajes WHERE id = ?', id, (error, results) => {

            if (error)
                throw error;
            res.send(results);
        });
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage = async(req, res) => {
    const { nombre, programadores } = req.body;
    try {
        if(nombre === undefined || programadores === undefined){
            res.status(400).json({message: "Bad Request. The body is empty"});
        }
        const languaje = {nombre, programadores};
        const connection = conexion();
         connection.query("INSERT INTO lenguajes SET ?", languaje);
        res.status(200).json("Se inserto el lenguaje");
    } catch (error) {
        es.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async (req, res) => {
    try{

        const {id} = req.params;
        const { nombre, programadores } = req.body;
        const language = {nombre, programadores};

        if(id === undefined || nombre === undefined || programadores === undefined){
            res.status(400).json("Bad request. Falta el id o el cuerpo de la solicitud esta incompleto");
        }
        const connection = await conexion();
        connection.query('UPDATE lenguajes SET ? WHERE id = ?', [language, id]);

        res.json({message:"Se actualizo el registro."});
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try{
        const {id} = req.params;
        const connection = await conexion();

        connection.query('DELETE FROM lenguajes WHERE id = ?', id, (error, results) => {
            res.send(results);
        });
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
};

export  { getLanguages, getLanguage, addLanguage, deleteLanguage, updateLanguage };

// export const methods = { getLanguages, getLanguage, addLanguage, deleteLanguage, updateLanguage };  