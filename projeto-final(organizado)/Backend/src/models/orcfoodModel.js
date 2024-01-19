import mongoose from 'mongoose' 

const OrcFoodSchema = new mongoose.Schema({
    nome: String, //nome do prato
    categoria: String,
    preco: Number,
})

const OrcfoodModel = mongoose.model('Orcfood', OrcFoodSchema)

export default OrcfoodModel