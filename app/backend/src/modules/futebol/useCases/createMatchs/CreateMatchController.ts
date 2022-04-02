import { Request, Response } from 'express';
import CreateMatchService from './CreateMatchService';

class MatchController {
  static async handle(req: Request, res: Response) {
    const {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    } = req.body;

    const result = await CreateMatchService.execute({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    return res.status(201).json(result);
  }
}

export default MatchController;
