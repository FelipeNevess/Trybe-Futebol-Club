import { Router } from 'express';

import ListClubController from '../modules/futebol/useCases/listClubs/ListClubController';
import GetClubController from '../modules/futebol/useCases/getClub/GetClubController';

const clubsRouter = Router();

clubsRouter.get('/', (req, res) => ListClubController.handle(req, res));
clubsRouter.get('/:id', (req, res) => GetClubController.handle(req, res));

export default clubsRouter;
