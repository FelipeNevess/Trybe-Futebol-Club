import { Router } from 'express';

import ListMatchController from '../modules/futebol/useCase/listMatchs/ListMatchController';

const matchsRouter = Router();

matchsRouter.get('/', (req, res) => ListMatchController.handle(req, res));

export default matchsRouter;
