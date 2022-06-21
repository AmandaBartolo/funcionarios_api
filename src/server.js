require('dotenv').config({path:'variaveis.env'})   //faz com que consiga ler o variaveis.env

const express = require('express')   //framework p/ API
const cors = require('cors')   //o cors permite acesso p/ API
const bodyParser = require('body-parser')   //o body-parser faz c/ que o body tenha outros formatos

const routes = require('./routes')   

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))
server.use('/api', routes)   //faz com que os prefixos das rotas tenham /api 

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})