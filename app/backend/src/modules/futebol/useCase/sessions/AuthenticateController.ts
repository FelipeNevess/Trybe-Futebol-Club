import { Request, Response } from 'express';
import AuthenticateService from './AuthenticateService';

class AuthenticateController {
  static async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const { user, token } = await AuthenticateService.execute({
      email,
      password,
    });

    const newUser = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email,
      },
      token,
    };

    return res.status(200).json(newUser);
  }
}

export default AuthenticateController;
