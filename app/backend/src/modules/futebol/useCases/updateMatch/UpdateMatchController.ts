import { Request, Response } from 'express';
import UpdateMatchUseCase from './UpdateMatchUseCase';
import { IRequestBody } from './IUpdateMatch';

class UpdateMatchController {
  constructor(
    private updateMatchUseCase: UpdateMatchUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { homeTeamGoals, awayTeamGoals }: IRequestBody = req.body;
    const { id } = req.params;

    const result = await this.updateMatchUseCase.execute({
      id: Number(id),
      homeTeamGoals,
      awayTeamGoals,
    });

    return res.status(200).json({ message: result });
  }
}

export default UpdateMatchController;
