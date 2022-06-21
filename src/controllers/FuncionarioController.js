const req = require('express/lib/request')
const FuncionarioService = require ('../services/FuncionarioService')

module.exports = {
    /* LISTAR TODOS */
    buscarTodos: async (req, res) => {    
        let json = {result:[]}   

        let funcionarios = await FuncionarioService.buscarTodos()

        for (let i in funcionarios) {
            json.result.push({
                id: funcionarios[i].id,
                matricula: funcionarios[i].matricula,
                nome: funcionarios[i].nome,
                email: funcionarios[i].email,
                cargo: funcionarios[i].cargo,
                salario: funcionarios[i].salario
            })
        }

        res.json(json)
    },

    /* LISTAR UM */
    buscarUm: async (req, res) => {
        let json = {result:{}}

        let id = req.params.id
        let funcionario = await FuncionarioService.buscarUm(id)

        if (funcionario) {
            json.result = funcionario
        } else {
            delete json.result
            json.error = "Funcionário não encontrado."
        }

        res.json(json)
    },

    /* INSERIR */
    inserir: async (req, res) => {
        let json = {result:{}}

        let matricula = req.body.matricula
        let nome = req.body.nome
        let email = req.body.email
        let cargo = req.body.cargo
        let salario = req.body.salario

        if (matricula && nome && email && cargo && salario) {
            let funcionarioID = await FuncionarioService.inserir(matricula, nome, email, cargo, salario)

            json.result = {
                id: funcionarioID, 
                matricula,
                nome,
                email,
                cargo,
                salario
            }
        } else {
            delete json.result
            json.error = "Dados não enviados."
        }

        res.json(json)
    },

    /* ALTERAR */
    alterar: async (req, res) => {
        let json = {result: {}}

        let id = req.params.id
        let matricula = req.body.matricula
        let nome = req.body.nome
        let email = req.body.email
        let cargo = req.body.cargo
        let salario = req.body.salario

        if (id && matricula && nome && email && cargo && salario) {
            await FuncionarioService.alterar(id, matricula, nome, email, cargo, salario);
            json.result = {
                id, 
                matricula,
                nome,
                email,
                cargo,
                salario
            }
        } else {
            delete json.result
            json.error = "Dados não alterados."
        }

        res.json(json)
    },

    /* EXCLUIR */
    deletar: async (req, res) => {
        let json = {error:'', result: {}}

        let funcionario = await FuncionarioService.deletar(req.params.id)

        if (funcionario.fieldCount !== 0) {
            json.result = funcionario
        } else {
            delete json.result
            json.error = "Funcionário não encontrado."
        }

        res.json(json)
    }
}