import {Router} from "Express";
import{ getLanguages, getLanguage, addLanguage, deleteLanguage, updateLanguage } from "../controllers/language.controller.js";

const router = Router();

// Acceder al metodo get del controlador, el `/` significa ruta raiz
router.get("/", getLanguages);
router.get("/:id", getLanguage);
router.post("/", addLanguage);
router.delete("/:id", deleteLanguage);
router.put("/:id", updateLanguage);

export default router;