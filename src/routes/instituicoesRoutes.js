const express = require("express")
const router = express.Router()
const controller = require("../controllers/instituicoesController")
const InstitugetInstituicaoCollection = require("../models/instituicoesSchema")

router.get("/instituicoes", controller.getInstituicao) // Funcionando
router.post("/cadastro_instituicao", controller.addInstituicao) // Funcionando
router.get("/encontrar_instituicao", controller.getInstituicaoByName) // Funcionando
router.delete("/deletar_instituicao/:id", controller.deleteInstituicao) 
router.patch("/atualizar_instituicao/:id", controller.updatePatchInstituicao)

module.exports = router 