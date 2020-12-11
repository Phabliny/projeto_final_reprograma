const express = require('express')
const app = express()
const cors = require('cors')
const db = require("./configs/database") 
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const jovens = require("../src/routes/jovensRoute")
const apoiadores = require("../src/routes/apoiadoresRoute")
const instituicao = require("../src/routes/instituicoesRoutes")

app.use("/", jovens)
app.use("/", apoiadores)
app.use("/", instituicao)

module.exports = app 