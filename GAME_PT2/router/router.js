const express = require("express");
const mainController = require('../app/controller/main');
const areaController = require("../app/controller/area");
const cursoController = require("../app/controller/curso");
const router = express.Router();


// Define a rota para a página "Main"
router.get("/sobre", mainController.sobre);
router.get("/", mainController.index);
router.get("/ui", mainController.ui);
router.get("/jogo", mainController.game);


//Define a rota para página "area"
router.get("/area", areaController.index);

//Define a rota para página "curso"

router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);
router.get("/curso/remove/:id", cursoController.remove);
router.get("/curso/:id", cursoController.read);
router.get("/curso/update", cursoController.update);
router.get("/curso/remove", cursoController.remove);


module.exports = router;
