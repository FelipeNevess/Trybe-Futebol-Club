import { Request, Response } from 'express';
import ListMatchUseCase from './ListMatchUseCase';

class ListMatchController {
  constructor(
    private listMatchUseCase: ListMatchUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    const result = await this.listMatchUseCase.execute(inProgress as string);

    return res.status(200).json(result);
  }
}

export default ListMatchController;
