import { Router } from 'express';

import ListMatchController from '../modules/futebol/useCases/listMatchs/ListMatchController';
import CreateMatchController from '../modules/futebol/useCases/createMatchs/CreateMatchController';
import UpdateMatchController from '../modules/futebol/useCases/updateMatch/UpdateMatchController';
import
UpdateMatchFinishController
  from '../modules/futebol/useCases/updateMatchFinish/UpdateMatchFinishController';

import VerifyAuthenticated from '../middlewares/VerifyAuthenticated';

const matchsRouter = Router();

matchsRouter.get('/', (req, res) => ListMatchController.handle(req, res));
matchsRouter.post('/', VerifyAuthenticated, (req, res) => CreateMatchController.handle(req, res));

matchsRouter.patch('/:id', (req, res) => UpdateMatchController.handle(req, res));
matchsRouter.patch('/:id/finish', (req, res) => UpdateMatchFinishController.handle(req, res));

export default matchsRouter;
