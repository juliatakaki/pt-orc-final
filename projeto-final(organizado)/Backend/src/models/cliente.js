import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema({
    nome: String,
    email: String,
    endereco: String,
    senha: String,
})

const ClientModel = mongoose.model('clientes', ClientSchema)

export default ClientModel