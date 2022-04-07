import { Request, Response } from 'express';
import ListClubUseCase from './ListClubUseCase';

class ListClubController {
  constructor(
    private listClubUseCase: ListClubUseCase,
  ) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    const result = await this.listClubUseCase.execute();

    return res.status(200).json(result);
  }
}

export default ListClubController;
