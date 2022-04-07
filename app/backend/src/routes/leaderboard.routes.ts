import { Router } from 'express';

import leaderBoard from '../modules/futebol/useCases/listLeaderBoard';
import leaderBoardHomeController from '../modules/futebol/useCases/listLeaderBoardHome';
import leaderBoardAwayController from '../modules/futebol/useCases/listLeaderBoardAway';

const leaderboard = Router();

leaderboard.get('/', async (req, res) => leaderBoard.handle(req, res));
leaderboard.get('/home', async (req, res) => leaderBoardHomeController.handle(req, res));
leaderboard.get('/away', async (req, res) => leaderBoardAwayController.handle(req, res));

export default leaderboard;
