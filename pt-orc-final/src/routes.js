import { Router } from 'express';
const cors = require('cors');
const express = require("express");

import OrcfoodController from './controller/orcfoodController.js';
import LoginController from './controller/loginController.js';
import registerController from './controller/registerController.js';

const routes = new Router();
const app = express();
app.use(express.json());
app.use(cors());

app.routes.get('/orcfoods', OrcfoodController.getAllOrcfoods);
app.routes.get("/orcfoods/search", OrcfoodController.searchOrcfoodsByCategory);
app.routes.post("/login", LoginController.login)
app.routes.post("/register", registerController.register)


export default routes;