import { Router } from 'express';

import
LeaderBoardController from '../modules/futebol/useCase/listLeaderboard/leaderboardController';

const leaderboard = Router();

leaderboard.get('/', (req, res) => LeaderBoardController.handle(req, res));

export default leaderboard;
