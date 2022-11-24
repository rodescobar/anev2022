const mongoose = require("mongoose")

try {

    const path = "mongodb+srv://rodrigo:Teste1234@cluster0.tot45nk.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(
        path
    )

    console.log("Conexão com o Mongo OK")
}
catch (e) {
    console.log(e)
}

mongoose.Promise = global.Promise

module.exports = mongoose