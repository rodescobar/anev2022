var mongoose = require("./database")

var Cliente = mongoose.Schema(
    {
        nome: String,
        documento: {
            type: String,
            required: true
        },
        cep: Number,
        cores_favorias: 
            [
                { 
                    cor: String,
                    favorita: Boolean
                }
            ],
        ativo: {
            type: Boolean,
            default: true
        }
    }
)

const Clientes = mongoose.model('cliente', Cliente)

module.exports = Clientes