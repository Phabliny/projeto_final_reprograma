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
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }, 
    senha: {
        type: String, 
        required: true,
        select: false
    }, 
    createAt: {
        type: String,
        default: Date.now
    }, 
    endereco: {
        type: String, 
        required: false
    }, 
    telefone: {
        type: Number,
        required: false
    },
    jovens: {
        type: Schema.Types.ObjectId, 
        ref: "JovensSchema",
        required: false
    } 
}, { timestamps: true})

const instituicoesCollection = mongoose.model('instituicoes', instituicoesSchema)

module.exports = instituicoesCollection