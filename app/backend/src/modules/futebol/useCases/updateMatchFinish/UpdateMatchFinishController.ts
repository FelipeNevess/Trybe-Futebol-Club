import { Request, Response } from 'express';
import UpdateMatchFinishUseCase from './UpdateMatchFinishUseCase';

class MatchController {
  constructor(
    private updateMatchFinishUseCase: UpdateMatchFinishUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const finish = req.url;

    const includeFinish = finish.includes('finish');

    const result = await this.updateMatchFinishUseCase.execute({
      id: Number(id),
      includeFinish,
    });

    return res.status(200).json({ message: result });
  }
}

export default MatchController;
