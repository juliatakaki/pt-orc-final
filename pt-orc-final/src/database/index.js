import 'dotenv/config'
import mongoose from 'mongoose';

const connectionURL = process.env.CONNECTION_URL || 'mongodb://<username>:<password>@<host>:<port>/<database>';

class Database {
    constructor() {
        this.connection = mongoose.connect(
            connectionURL
        ).then(() => console.log("Connected to Database"))
    }
}

export default new Database();