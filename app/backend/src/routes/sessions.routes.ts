import { Router } from 'express';

import AuthenticateController from '../modules/futebol/useCase/sessions/AuthenticateController';
import UserAuthenticated from '../middlewares/VerifyAuthenticated';
import User from '../database/models/User';
import { IResponseSession } from '../modules/futebol/repositories/ISessionsRepositories';

const sessionsRouter = Router();

sessionsRouter.post('/', (req, res) => AuthenticateController.handle(req, res));

sessionsRouter.get('/validate', UserAuthenticated, async (req, res) => {
  const { id } = req.user;
  const { role } = await User.findOne({ where: { id } }) as IResponseSession;

  return res.status(200).send(role);
});

export default sessionsRouter;
