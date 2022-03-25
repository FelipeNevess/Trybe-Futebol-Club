import { Request, Response } from 'express';
import UpdateMatchService from './UpdateMatchService';

class MatchController {
  static async handle(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const finish = req.url;

    const includeFinish = finish.includes('finish');

    const result = await UpdateMatchService.execute({
      id: Number(id),
      homeTeamGoals,
      awayTeamGoals,
      includeFinish,
    });

    return res.status(201).json(result);
  }
}

export default MatchController;
