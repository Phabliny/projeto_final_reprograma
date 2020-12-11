const express = require("express")
const router = express.Router()
const controller = require("../controllers/jovensController")
const jovensCollection = require("../models/jovensSchema")

router.get("/jovens", controller.getJovens) //Funcionando
router.post("/cadastro_jovem", controller.addJovem) //Funcionando
router.get("/encontrar_jovem", controller.getJovemByName) //Funcionando
router.delete("/deletar_jovem/:id", controller.deleteJovem) //funcionando
router.patch("/atualizar/nome/:id", controller.updatePatchJovem) //funcionando

module.exports = router