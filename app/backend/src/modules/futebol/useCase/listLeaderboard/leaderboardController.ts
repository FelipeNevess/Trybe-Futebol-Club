import { Request, Response } from 'express';
import LeaderBoardService from './leaderboardService';

class LeaderBoardController {
  static async handle(req: Request, res: Response) {
    const result = await LeaderBoardService.execute();

    return res.status(200).json(result);
  }
}

export default LeaderBoardController;
