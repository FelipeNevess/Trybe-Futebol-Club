import { Router } from 'express';

import UserAuthenticated from '../middlewares/VerifyAuthenticated';

import CreateAuthenticateController from '../modules/futebol/useCases/login';
import LoginValidateController from '../modules/futebol/useCases/loginValidate';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => CreateAuthenticateController.handle(req, res));
sessionsRouter
  .get('/validate', UserAuthenticated, async (req, res) => LoginValidateController
    .handle(req, res));

export default sessionsRouter;
