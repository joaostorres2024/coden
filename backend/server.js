const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/teste', (req, res) => {
  res.json({ mensagem: 'API funcionando!' })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

const cors = require('cors')
app.use(cors())