const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const ClientModel = require('../src/models/cliente')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cliente");

app.post("/login", (req,res) => {
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
})

app.post('/register', (req, res) => {
    ClientModel.create(req.body)
    .then(clientes => res.json(clientes))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
});
