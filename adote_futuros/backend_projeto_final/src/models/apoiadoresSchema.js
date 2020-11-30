const mongoose = require("mongoose")

const Schema = mongoose.Schema

const apoiadoresSchema = new Schema ({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
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
        type: String, enum: ["Feminino", "Masculino", "Não binário"],
        require: true     
    },
    cpf: {
        type: Number,
        required: true
    },
    endereco: {
        type: String, 
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
})

const apoiadoresCollection = mongoose.model('apoiadores', apoiadoresSchema)

module.exports = apoiadoresCollection