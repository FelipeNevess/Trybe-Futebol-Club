import { Router } from 'express';

import ListMatchController from '../modules/futebol/useCase/listMatchs/ListMatchController';
import CreateMatchController from '../modules/futebol/useCase/createMatchs/CreateMatchController';
import UpdateMatchController from '../modules/futebol/useCase/updateMatch/UpdateMatchController';

import VerifyAuthenticated from '../middlewares/VerifyAuthenticated';

const matchsRouter = Router();

matchsRouter.get('/', (req, res) => ListMatchController.handle(req, res));
matchsRouter.post('/', VerifyAuthenticated, (req, res) => CreateMatchController.handle(req, res));

matchsRouter.patch('/:id', (req, res) => UpdateMatchController.handle(req, res));
matchsRouter.patch('/:id/finish', (req, res) => UpdateMatchController.handle(req, res));

export default matchsRouter;
