import { Router } from 'express';

import CreateMatchController from '../modules/futebol/useCases/createMatchs';
import ListMatchController from '../modules/futebol/useCases/listMatchs';
import UpdateMatchController from '../modules/futebol/useCases/updateMatch';
import UpdateMatchFinishUseCase from '../modules/futebol/useCases/updateMatchFinish';

import UserAuthenticated from '../middlewares/VerifyAuthenticated';

const matchsRouter = Router();

matchsRouter.get('/', async (req, res) => ListMatchController.handle(req, res));
matchsRouter
  .post(
    '/',
    UserAuthenticated,
    async (req, res) => CreateMatchController.handle(req, res),
  );

matchsRouter.patch('/:id', async (req, res) => UpdateMatchController.handle(req, res));
matchsRouter.patch('/:id/finish', async (req, res) => UpdateMatchFinishUseCase.handle(req, res));

export default matchsRouter;
