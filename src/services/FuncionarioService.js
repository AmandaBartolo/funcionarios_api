const db = require ('../db')

module.exports = {
    /* LISTAR TODOS */
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM funcionarios', (error, results) => {
                if (error) {rejeitado(error); return}
                aceito(results)
            })
        })
    },

    /* LISTAR UM */
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM funcionarios WHERE id = ?', [id], (error, results) => {
                if (error) {rejeitado(error); return}
                if (results.length > 0) {
                    aceito(results[0])
                } else {
                    aceito(false)
                }
            })
        })
    },

    /* INSERIR */
    inserir: (matricula, nome, email, cargo, salario) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO funcionarios VALUES (default, ?, ?, ?, ?, ?)', [matricula, nome, email, cargo, salario], (error, results) => {
                if (error) {rejeitado(error); return}
                aceito(results.insertId)
            })
        })
    },

    /* ALTERAR */
    alterar: (id, matricula, nome, email, cargo, salario) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE funcionarios SET matricula = ?, nome = ?, email = ?, cargo = ?, salario = ? WHERE id = ?', [matricula, nome, email, cargo, salario, id], (error, results) => {
                if (error) {rejeitado(error); return}
                aceito(results)
            })
        })
    },

    /* EXCLUIR */   
    deletar: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM funcionarios WHERE id = ?', [id], (error, results) => {
                if (error) {rejeitado(error); return}
                aceito(results)
            })
        })
    }
}