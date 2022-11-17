var express = require("express")
var app = express()

app.use(express.json());

var Cliente = require("./model/cliente")
//Tsste
//URL : 127.0.0.1
//Endpoint: cliente
//URL: 127.0.0.1/cliente
   /*
        GET => Lista clientes cadastrados no banco.
        POST => Inclusão de cliente
        PUT => Alteracao de Cliente
        DELETE => Exclusao de cliente
   */

app.get("/clientes", async function(req, res) {
    var clientes = await Cliente.find()
    res.send( clientes )
})

app.get("/cliente/:id", async function(req, res) {
    
    var id = req.params.id

    var cliente = await Cliente.findById( id )

    res.send( cliente )

})

app.post("/cliente", async function(req, res) {
    
    var { nome, documento, cores_favoritas, cep, ativo } = req.body

    if ( cep == undefined )
        res.send( { error: "CEP é obrigatorio" })
    else {
        /*
             db.cliente.insert({ nome: "Prof. Rodrigo" })
            INSERT INTO tabela VALUES (asssasda,sadada,sd,asdasdasd)

            Cliente.create = db.cliente.insert
        */
        //console.log( { nome, documento, cores_favoritas, cep, ativo })
        var retorno = await Cliente.create({ nome, documento, cores_favoritas, cep, ativo })
        //console.log(retorno)

        res.send({ msg: "Sucesso" })
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