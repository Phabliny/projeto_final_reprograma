const mongoose = require("mongoose")

const Schema = mongoose.Schema

const instituicoesSchema = new Schema ({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    }, 
    endereco: {
        type: String, 
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    jovens: {
        type: Array,
        required: true
    }
})

const instituicoesCollection = mongoose.model('instituicoes', instituicoesSchema)

module.exports = instituicoesCollection