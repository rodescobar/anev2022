var Cliente = require("./model/cliente")

Alterar = async () => {

    var clie = { 
        _id: ObjectId("sfdsdfsdf786er8236823sjdgjsdgfjsdf"),
        nome: "Jose",
        telefone: "5555",
        endereco: [
            {
                rua: "sadsada",
                numero: "dadasda"
            },
            {
                rua: "2222",
                numero: "dadasda"
            }
        ]
    }

    var retorno = await Cliente.updateOne({ _id: clie._id }, { nome: clie.nome })


}

AlterarAlternativo = async () => {

    var clie = { 
        _id: ObjectId("sfdsdfsdf786er8236823sjdgjsdgfjsdf"),
        nome: "Jose",
        telefone: "5555",
        endereco: [
            {
                rua: "sadsada",
                numero: "dadasda"
            },
            {
                rua: "ernesto palha",
                cep: 4545
            }
        ]
    }

    var retorno = await Cliente.findById( clie._id )

    if (retorno.nome != clie.nome)
        retorno.nome = clie.nome

    if (retorno.telefone != clie.telefone)
        retorno.telefone = clie.telefone

    if (retorno.endereco[0].cep != clie.endereco[0].cep )


    retorno.endereco.push(clie.endereco)

    retorno.save()

}