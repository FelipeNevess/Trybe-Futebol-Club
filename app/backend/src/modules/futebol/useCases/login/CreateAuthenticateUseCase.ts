import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import AppError from '../../../../errors/AppError';
import authConfig from '../../../../config/auth/auth';
import { ICreateSessionsRepositories } from '../../repositories/ISessionsRepositories';
import ValidateInfosSessionUtils from '../../../../utils/ValidateInfosSessionUtils';
import IAuthenticate from './IAuthenticate';

class CreateAuthenticateUserCase {
  constructor(
    private sessionsRepositories: ICreateSessionsRepositories,
  ) {}

  async verifyInfos({ email, password }: IAuthenticate) {
    this.verifyInfos = this.verifyInfos.bind(this);

    ValidateInfosSessionUtils.validation({ email, password });

    const user = await this.sessionsRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email or password', 401);
    }

    const passwordHash = await compare(password, user.password);

    if (!passwordHash) {
      throw new AppError('Incorrect email or password', 401);
    }

    return user;
  }

  async execute({ email, password }: IAuthenticate) {
    const user = await this.verifyInfos({ email, password });

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn: expiresIn as string,
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

    return newUser;
  }
}

export default CreateAuthenticateUserCase;
