const express = require("express")
const router = express.Router()
const controller = require("../controllers/jovensController")
const jovensCollection = require("../models/jovensSchema")

router.get("/jovens", controller.getJovens) 
router.post("/cadastro_jovem", controller.addJovem) 
router.get("/encontrar_jovem", controller.getJovemByName) 
router.delete("/deletar_jovem/:id", controller.deleteJovem) 
router.patch("/atualizar/nome/:id", controller.updatePatchJovem) 

module.exports = router