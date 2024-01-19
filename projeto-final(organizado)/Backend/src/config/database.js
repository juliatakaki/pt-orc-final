import mongoose from 'mongoose'

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            const connectionURL = process.env.CONNECTION_URL || "mongodb+srv://annaprimo:diamelufus@cluster0.nuzls9a.mongodb.net/?retryWrites=true&w=majority"
            await mongoose.connect(connectionURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Conectado ao Banco de Dados');
        } catch (error) {
            console.error('Erro ao conectar no Banco de Dados:', error.message);
        }
    }
}


export default new Database();