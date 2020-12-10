const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/database")
const bodyParser = require("body-parser")

db.connect()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const jovens = require("./routes/jovensRoute")
const apoiadores = require("./routes/apoiadoresRoute")
const instituicao = require("./routes/instituicoesRoutes")

app.use("/adote", jovens)
app.use("/apoie", apoiadores)
app.use("/instituicao", instituicao)


module.exports = app