import express from 'express';
import { Router } from 'express'
import cors from 'cors'

import OrcfoodController from '../controllers/OrcFoodController.js'
import LoginController from '../controllers/LoginController.js'
import RegisterController from '../controllers/RegisterController.js'


const routes = Router()

routes.use(cors())
routes.use(express.json())

routes.get('/orcfoods', OrcfoodController.getAllOrcfoods)
routes.get('/orcfoods/search', OrcfoodController.searchOrcfoodByCategory)
routes.post('/login', LoginController.login)
routes.post('/register', RegisterController.register)

export default routes