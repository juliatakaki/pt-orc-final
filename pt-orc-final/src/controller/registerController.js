    const express = require("express");
    const mongoose = require('mongoose');
    const cors = require('cors');
    const ClientModel = require('../src/models/cliente')

    const app = express();

    class registerController {
        asyncregister(req, res) {
            ClientModel.create(req.body)
        .then(clientes => res.json(clientes))
        .catch(err => res.json(err))
        
        }
    }

    export default new registerController()