const instituicoesCollection = require("../models/instituicoesSchema")

//getInstituicao
const getInstituicao = (req, res) => {
    instituicoesCollection.find((error, instituicao)=> {
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({mensagem: "Deu tudo certo!", instituicao})
        }
    }) 
}
 
//addInstituicao
const addInstituicao = (req, res) => {
    const instituicaoBody = req.body
    const instituicao = new instituicoesCollection(instituicaoBody) 
    instituicao.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).send({mensagem: "POST realizado com sucesso!", instituicao})
        }    
    })
}

//getInstituicaoByNamev 
const getInstituicaoByName = (req, res) => {
    const nomeQuery= req.query
    instituicoesCollection.findOne(nomeQuery, (error, instituicao) => {
        if(error){
            return res.status(500).send(error)
        }else{
            if(instituicao){
                return res.status(200).send(instituicao)
            }else{
                return res.status(400).send("A instituição não encontrada! :( ")
            }
        }
    })
}

//deleteInstituicao
const deleteInstituicao= (req, res) => {
    const idParam = req.params.id
    instituicoesCollection.findByIdAndDelete(idParam, (error, instituicao) => {
        if(error){
            return res.status(500).send(error) 
        } else {
            if(instituicao) {
                return res.status(200).send('O cadastro a instituição foi deletada!') 
            } else { 
                return res.sendStatus(404)
            }
        }
    }) 
} 

//updatePatchInstituicao
const updatePatchInstituicao = (req, res) => {
    const idParam = req.params.id
    const instituicaoBody = req.body

    const novo = {new: true}
    instituicoesCollection.findByIdAndUpdate(
        idParam,
        instituicaoBody,
        novo,
        (error, instituicao) => {
            if(error){
                return res.status(500).send(error)
            } else if (instituicao) {
                return res.status(200).send(instituicao) 
            } else {
                return res.sendStatus(404)
            }
        } 
        )
}

module.exports = {
    getInstituicao,
    addInstituicao, 
    getInstituicaoByName,
    deleteInstituicao,
    updatePatchInstituicao
}