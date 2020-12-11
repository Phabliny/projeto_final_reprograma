const express = require("express")
const router = express.Router()
const controller = require("../controllers/instituicoesController")
const InstitugetInstituicaoCollection = require("../models/instituicoesSchema")

router.get("/instituicoes", controller.getInstituicao) 
router.post("/cadastro_instituicao", controller.addInstituicao) 
router.get("/encontrar_instituicao", controller.getInstituicaoByName) 
router.delete("/deletar_instituicao/:id", controller.deleteInstituicao) 
router.patch("/atualizar_instituicao/:id", controller.updatePatchInstituicao)

module.exports = router 