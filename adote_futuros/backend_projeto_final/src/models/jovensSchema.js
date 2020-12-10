const mongoose = require("mongoose")

const Schema = mongoose.Schema

const jovensSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    genero: {
        type: String, enum: ["Feminino", "Maculino", "Não binário"],
        require: true
    },
    nivelFormacao:{
        type: String,
        required: true
    },
    fotoPerfil: {
        type: String,
        requires: false
    },
    observacoes: {
        type: String,
        requires: false
    }
}, { timestamps: true})

const jovensCollection = mongoose.model("jovens", jovensSchema)

module.exports = jovensCollection

