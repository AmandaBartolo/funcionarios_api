const express = require('express')   //express é um framework
const router = express.Router()   //??

const FuncionarioController = require('./controllers/FuncionarioController')

router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionario/:id', FuncionarioController.buscarUm)
router.post('/funcionario', FuncionarioController.inserir)
router.put('/funcionario/:id', FuncionarioController.alterar)
router.delete('/funcionario/:id', FuncionarioController.deletar)

module.exports = router 