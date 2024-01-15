import { Router } from 'express';

import orcfoodController from './controller/orcfoodController.js';

const routes = new Router();

routes.get('/orcfoods', orcfoodController.getAllOrcfoods);
routes.get("/orcfoods/search", orcfoodController.searchOrcfoodsByCategory);

export default routes;