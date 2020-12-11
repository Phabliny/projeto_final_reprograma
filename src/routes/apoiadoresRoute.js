const express = require("express")
const router = express.Router()
const controller = require("../controllers/apoiadoresController")
const apoiadoresCollection = require("../models/apoiadoresSchema")

router.get("/apoiadores", controller.getApoiadores) 
router.post("/cadastro_apoiador", controller.addApoiador) 
router.get("/encontrar_apoiador", controller.getApoiadorByName) 
router.delete("/deletar_apoiador/:id", controller.deleteApoiador) 
router.patch("/atualizar_apoiador/:id", controller.updatePatchApoiador)

module.exports = router