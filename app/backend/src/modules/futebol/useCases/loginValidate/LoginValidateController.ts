import { Request, Response } from 'express';
import LoginValidadeUserCase from './LoginValidateUseCase';
import { IRequest } from './ILoginValidate';

class LoginValidateController {
  constructor(
    private loginValidadeUserCase: LoginValidadeUserCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id }: IRequest = req.body.user;

    const { role } = await this.loginValidadeUserCase.execute(id);

    return res.status(200).json(role);
  }
}

export default LoginValidateController;
