import { Request, Response } from 'express';
import LeaderBoardHomeUseCase from './LeaderBoardHomeUseCase';

class LeaderBoardController {
  constructor(
    private leaderBoardHomeUseCase: LeaderBoardHomeUseCase,
  ) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    const result = await this.leaderBoardHomeUseCase.execute();

    return res.status(200).json(result);
  }
}

export default LeaderBoardController;
