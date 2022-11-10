var express = require("express")
var app = express()

app.use(express.json());

var Cliente = require("./model/cliente")

//URL : 127.0.0.1
//Endpoint: cliente
//URL: 127.0.0.1/cliente
   /*
        GET => Lista clientes cadastrados no banco.
        POST => Inclusão de cliente
        PUT => Alteracao de Cliente
        DELETE => Exclusao de cliente
   */

app.get("/cliente", function(req, res) {
    res.send("Lista de clientes")
})

app.post("/cliente", async function(req, res) {
    
    var { nome, documento, cores_favoritas, cep, ativo } = req.body
    
    console.log( nome, documento, cores_favoritas, cep, ativo )

    if ( cep == undefined )
        res.send("CEP é obrigatorio")
    else {
        /*
             db.cliente.insert({ nome: "Prof. Rodrigo" })
        */
        var retorno = await Cliente.create({ nome, documento, cores: cores_favoritas, cep, ativo })
        console.log(retorno)

        res.send("Sucesso")
    }
        

    
})

app.put("/cliente", function(req, res) {
    res.send("Alteracao de cliente")
})

app.delete("/cliente", function(req, res) {
    res.send("Exclusao de cliente")
})

app.listen(80, function(req, res) {
    console.log("Servidor Online")
})