import 'dotenv/config'
import mongoose from 'mongoose';

const connectionURL = process.env.CONNECTION_URL || 'mongodb://127.0.0.1:27017/cliente';
class Database {
    constructor() {
        this.connection = mongoose.connect(
            connectionURL
        ).then(() => console.log("Connected to Database"))
    }
}

export default new Database();