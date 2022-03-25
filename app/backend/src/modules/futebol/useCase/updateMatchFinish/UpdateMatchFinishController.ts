import { Request, Response } from 'express';
import UpdateMatchFinishService from './UpdateMatchFinishService';

class MatchController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;
    const finish = req.url;
    const includeFinish = finish.includes('finish');

    const result = await UpdateMatchFinishService.execute({
      id: Number(id),
      includeFinish,
    });

    return res.status(200).json({ message: result });
  }
}

export default MatchController;
