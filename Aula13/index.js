var express = require("express")
var app = express()

var Cliente = require("./model/cliente")






app.listen(80, function(req, res) {
    console.log("Servidor Online")
})