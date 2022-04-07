import { Router } from 'express';

import ListClubController from '../modules/futebol/useCases/listClubs';
import GetByClubController from '../modules/futebol/useCases/getByClub';

const clubsRouter = Router();

clubsRouter.get('/', async (req, res) => ListClubController.handle(req, res));
clubsRouter.get('/:id', async (req, res) => GetByClubController.handle(req, res));

export default clubsRouter;
