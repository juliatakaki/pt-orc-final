const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nome: String,
    email: String,
    endereco: String,
    senha: String
})

const ClientModel = mongoose.model("clientes", ClientSchema)
module.exports = ClientModel