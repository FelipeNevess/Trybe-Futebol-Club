import { Request, Response } from 'express';
import GetByClubUseCase from './GetClubUseCase';

class GetByClubController {
  constructor(
    private getByClubUseCase: GetByClubUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.getByClubUseCase.execute(Number(id));

    return res.status(200).json(result);
  }
}

export default GetByClubController;
