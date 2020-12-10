const dotenv = require('dotenv')
const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5555

app.listen(PORT, () => console.log(`Servidorzinho funcionando na porta ${PORT}`)) 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
  })
  .then(() => console.log("Estamos conectadas!"))
  .catch((err) => console.log(err))

  app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const jovens = require("./src/routes/jovensRoute")
const apoiadores = require("./src/routes/apoiadoresRoute")
const instituicao = require("./src/routes/instituicoesRoutes")

app.use("/", jovens)
app.use("/", apoiadores)
app.use("/", instituicao)

module.exports = app