import mongoose from 'mongoose';

const orcfoodSchema = new mongoose.Schema(
    {
        nome: { // nome do prato a ser pedido
            type: String
        },

        categoria: { // sanduíche, acompanhamento, bebida
            type: String
        },
        
        preço: {
            type: Number
        }
    }
)

export default mongoose.model("Orcfood", orcfoodSchema)