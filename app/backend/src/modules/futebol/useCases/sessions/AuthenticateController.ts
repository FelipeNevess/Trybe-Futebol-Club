import { Request, Response } from 'express';
import AuthenticateService from './AuthenticateService';

class AuthenticateController {
  static async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await AuthenticateService.execute({
      email,
      password,
    });

    return res.status(200).json(result);
  }
}

export default AuthenticateController;
