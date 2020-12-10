const app = require("./src/app")
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5555

app.listen(PORT, () => console.log(`Servidorzinho funcionando na porta ${PORT}`)) 

/*app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
  })*/
