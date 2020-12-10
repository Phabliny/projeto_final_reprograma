const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
    .then(() => console.log("Estamos conectadas!"))
    .catch((err) => console.log(err))
}

module.exports = {connect}

/*const connect = () => {
    mongoose.connect(DB_URL, {useNewUrParser: true}) 
    const connection = mongoose.connection
    connection.on("error", () => console.log("Erro ao conectar com o MongoDB!"))
    connection.once("open", () => console.log("Estamos conectadas!"))
}

module.exports = {connect}*/