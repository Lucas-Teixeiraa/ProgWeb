const express = require("express");
const mainController = require('../app/controller/main');
const router = express.Router();


// Define a rota para a página "sobre"
router.get("/sobre", mainController.sobre);
router.get("/", mainController.index);
router.get("/ui", mainController.ui);
router.get("/jogo", mainController.game);


module.exports = router;
