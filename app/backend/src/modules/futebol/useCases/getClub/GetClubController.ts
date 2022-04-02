import { Request, Response } from 'express';
import ClubService from './GetClubService';

class ClubController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    const result = await ClubService.execute(Number(id));

    return res.status(200).json(result);
  }
}

export default ClubController;
