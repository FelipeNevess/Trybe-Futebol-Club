import { Request, Response } from 'express';
import CreateAuthenticateUserCase from './CreateAuthenticateUseCase';
import IRequest from './IAuthenticate';

class CreateAuthenticateController {
  constructor(
    private createAuthenticateUserCase: CreateAuthenticateUserCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password }: IRequest = req.body;

    const result = await this.createAuthenticateUserCase.execute({
      email,
      password,
    });

    return res.status(200).json(result);
  }
}

export default CreateAuthenticateController;
