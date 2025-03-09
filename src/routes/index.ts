import { Router } from 'express';
import { IndexController } from '../controllers';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/', indexController.getIndex.bind(indexController));
    app.get('/login', indexController.getLogin.bind(indexController));
    app.get('/setup', indexController.getSetup.bind(indexController));
}