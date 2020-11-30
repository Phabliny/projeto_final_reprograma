const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./models/repository")

db.connect()
app.use(cors())
app.use(express.json())

const jovens = require("./routes/jovensRoute")
const apoiadores = require("./routes/apoiadoresRoute")

app.use("/adote", jovens)
app.use("/apoie", apoiadores)

module.exports = app