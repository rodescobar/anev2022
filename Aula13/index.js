var express = require("express")
var app = express()

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

app.post("/cliente", function(req, res) {
    res.send("Inclusao de cliente")
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