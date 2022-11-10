/*
var app = require('express')()
*/

const express = require('express')

var app = express()

app.get("/escobar", function( req, res ){
    console.log("Voce chegou")
})

app.get("/aula", function( req, res ){
    console.log("Voce chegou aula")
    res.send("Voce chegou aqui e recebeu uma resposta minha")
})


app.listen(8080, function() {
    console.log("Servidor online")
})
