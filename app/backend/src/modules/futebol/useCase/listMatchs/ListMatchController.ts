import { Request, Response } from 'express';
import MatchService from './ListMatchService';

class MatchController {
  static async handle(req: Request, res: Response) {
    const result = await MatchService.execute();

    return res.status(200).json(result);
  }
}

export default MatchController;
