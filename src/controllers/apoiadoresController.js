const apoiadoresCollection = require("../models/apoiadoresSchema")

//getApoiadores
const getApoiadores = (req, res) => {
    apoiadoresCollection.find((error, apoiadores)=> {
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({mensagem: "Deu tudo certo!", apoiadores})
        }
    }) 
}

//addApoiador
const addApoiador = (req, res) => {
    const apoiadorBody = req.body
    const apoiador = new apoiadoresCollection(apoiadorBody)
    apoiador.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).send({mensagem: "POST realizado com sucesso!", apoiador})
        }    
    })
}

//getApoiadorByName
const getApoiadorByName = (req, res) => {
    const nomeQuery= req.query
    apoiadoresCollection.findOne(nomeQuery, (error, jovem) => {
        if(error){
            return res.status(500).send(error)
        }else{
            if(jovem){
                return res.status(200).send(jovem)
            }else{
                return res.status(400).send("Jovem não encontrado! :( ")
            }
        }
    })
}

//deletApoiador
const deleteApoiador = (req, res) => {
    const idParam = req.params.id
    apoiadoresCollection.findByIdAndDelete(idParam, (error, apoiador) => {
        if(error){
            return res.status(500).send(error) 
        } else {
            if(apoiador) {
                return res.status(200).send('O seu cadastro como apoiador foi deletado!') 
            } else { 
                return res.sendStatus(404)
            }
        }
    }) 
} 

//updateApoiador
const updatePatchApoiador = (req, res) => {
    const idParam = req.params.id
    const apoiadorBody = req.body

    const novo = {new: true}
    apoiadoresCollection.findByIdAndUpdate(
        idParam,
        apoiadorBody,
        novo,
        (error, apoiador) => {
            if(error){
                return res.status(500).send(error)
            } else if (apoiador) {
                return res.status(200).send(apoiador) 
            } else {
                return res.sendStatus(404)
            }
        } 
        )
}

module.exports = {
    getApoiadores,
    addApoiador, 
    getApoiadorByName,
    deleteApoiador,
    updatePatchApoiador   
}