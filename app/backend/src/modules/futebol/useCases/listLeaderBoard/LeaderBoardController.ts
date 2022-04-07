import { Request, Response } from 'express';
import LeaderBoardUseCase from './LeaderBoardUseCase';

class LeaderBoardController {
  constructor(
    private leaderBoardUseCase: LeaderBoardUseCase,
  ) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    const result = await this.leaderBoardUseCase.execute();

    return res.status(200).json(result);
  }
}

export default LeaderBoardController;
