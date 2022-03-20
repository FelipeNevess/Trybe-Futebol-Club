import { Request, Response } from 'express';
import ClubService from './ListClubService';

class ClubController {
  static async handle(req: Request, res: Response) {
    const result = await ClubService.execute();

    return res.status(200).json(result);
  }
}

export default ClubController;
