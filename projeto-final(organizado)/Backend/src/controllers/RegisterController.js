import ClientModel from '../models/cliente.js'

class RegisterController{
    async register( req, res){
        try{
            const clientes = await ClientModel.create(req.body)
            res.json(clientes)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }
}

export default new RegisterController()