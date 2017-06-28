var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

rotas.get('/buscar', function(request, response){
    console.log('Rota de busca Produto');
    response.end();
})

rotas.post('/incluir', function(request, response){
    console.log('Rota de inclusao Produto');
    response.end();
})

rotas.put('/alterar', function(request, response){
    console.log('Rota de alteracao Produto');
    response.end();
})

rotas.delete('/excluir', function(request, response){
    console.log('Rota de exclusao Produto');
    response.end();
})

module.exports = rotas;