const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const ClientModel = require('../src/models/cliente')

const app = express();



class LoginController {
    async login(req, res) {
        const {email, senha} = req.body;
        ClientModel.findOne({email: email})
        .then(user => {
            if(user) {
                if(user.senha === senha){
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }           
            } else {
                res.json("No record existed")
            }
        })
    
    }
}

export default new LoginController()