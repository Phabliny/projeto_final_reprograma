const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    mensagem: "API Adote Futuros - Reprograma"})
})

module.exports = router;