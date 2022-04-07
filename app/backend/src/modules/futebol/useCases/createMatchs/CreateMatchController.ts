import { Request, Response } from 'express';
import CreateMatchUseCase from './CreateMatchUseCase';
import { IRequest } from './ICreateMatch';

class CreateMatchController {
  constructor(
    private createMatchUseCase: CreateMatchUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body as IRequest;

    const result = await this.createMatchUseCase.execute({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    }) as IRequest;

    return res.status(201).json(result);
  }
}

export default CreateMatchController;
