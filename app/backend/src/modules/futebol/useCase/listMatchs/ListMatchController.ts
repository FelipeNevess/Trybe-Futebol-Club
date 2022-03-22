import { Request, Response } from 'express';
import MatchService from './ListMatchService';

class MatchController {
  static async handle(req: Request, res: Response) {
    const { inProgress } = req.query;

    const results = inProgress;
    const result = await MatchService.execute(results as string);

    return res.status(200).json(result);
  }
}

export default MatchController;