const jovensCollection = require("../models/jovensSchema")

//getJovens
const getJovens = (req, res) => {
    jovensCollection.find((error, jovens)=> {
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({mensagem: "Deu tudo certo!", jovens})
        }
    }) 
}

//addJovem
const addJovem = (req, res) => {
    const jovemBody = req.body
    const jovem = new jovensCollection(jovemBody)
    jovem.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).send({mensagem: "POST realizado com sucesso!", jovem})
        }    
    })
}

//getJovemByName
const getJovemByName = (req, res) => {
    const nomeQuery= req.query
    jovensCollection.findOne(nomeQuery, (error, jovem) => {
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

// getJovensByInstitution (modificar para mostrar todos os jovens da mesma instituição)
const getJovensByInstitution = (req,res) => {
    const instituicaoQuery = req.query
    jovensCollection.findOne(instituicaoQuery , (error, jovens) => {
        if(error){
            return res.status(500).send(error)
        } else {
            if(jovens){
                return res.status(200).send(jovens)
            } else{
                return res.status(404).send("Instituição não encontrada! :( ")
            }
        }
    }) 
 }

//deleteJovem
const deleteJovem = (req, res) => {
    const idParam = req.params.id
    jovensCollection.findByIdAndDelete(idParam, (error, jovem) => {
        if(error){
            return res.status(500).send(error) 
        } else {
            if(jovem) {
                return res.status(200).send('O cadastro do jovem foi deletado!') 
            } else { 
                return res.sendStatus(404)
            }
        }
    }) 
} 

//updatePatchJovem
const updatePatchJovem = (req, res) => {
    const idParam = req.params.id
    const jovemBody = req.body

    const novo = {new: true}
    jovensCollection.findByIdAndUpdate(
        idParam,
        jovemBody,
        novo,
        (error, jovem) => {
            if(error){
                return res.status(500).send(error)
            } else if (jovem) {
                return res.status(200).send(jovem) 
            } else {
                return res.sendStatus(404)
            }
        } 
        )
}

module.exports = {
    getJovens,
    addJovem, 
    getJovemByName,
    getJovensByInstitution,
    deleteJovem,
    updatePatchJovem
}