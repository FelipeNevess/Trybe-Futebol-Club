import { Request, Response } from 'express';
import LeaderBoardAwayUseCase from './LeaderBoardAwayUseCase';

class LeaderBoardController {
  constructor(
    private leaderBoardAwayUseCase: LeaderBoardAwayUseCase,
  ) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    const result = await this.leaderBoardAwayUseCase.execute();

    return res.status(200).json(result);
  }
}

export default LeaderBoardController;
