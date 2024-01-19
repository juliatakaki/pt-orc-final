import ClientModel from '../models/cliente.js'

class LoginController{
    async login(req, res){
        const { email, senha } = req.body
        ClientModel.findOne({email: email})
        .then(user => {
            if (user){
                if(user.senha === senha){
                    res.json('Sucesso ao Logar!')
                } else {
                    res.json('Senha incorreta')
                }
            } else {
                res.json('User não cadastrado')
            }
        })
    }
}

export default new LoginController()
