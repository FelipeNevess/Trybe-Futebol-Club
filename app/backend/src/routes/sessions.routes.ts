import { Router } from 'express';

import AuthenticateController from '../modules/futebol/useCase/sessions/AuthenticateController';
import UserAuthenticated from '../middlewares/verifyAuthenticated';

const sessionsRouter = Router();

sessionsRouter.post('/', UserAuthenticated, (req, res) => AuthenticateController.handle(req, res));

export default sessionsRouter;
