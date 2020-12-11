const express = require('express')
const app = express()
const db = require("./config/database") 
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const index = require("../src/routes/index")
const jovens = require("../src/routes/jovensRoute")
const apoiadores = require("../src/routes/apoiadoresRoute")
const instituicao = require("../src/routes/instituicoesRoutes")

app.use("/", index)
app.use("/", jovens)
app.use("/", apoiadores) 
app.use("/", instituicao)

module.exports = app 