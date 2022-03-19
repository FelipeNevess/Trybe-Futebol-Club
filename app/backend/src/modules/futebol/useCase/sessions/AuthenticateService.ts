// import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../../../../errors/AppError';
import authConfig from '../../../../config/auth';
import SessionsRepository from '../../repositories/implementations/SessionsRepositories';
import ValidateInfosSession from '../../../../utils/ValidateInfosSession';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateService {
  execute = async ({ email, password }: IRequest) => {
    ValidateInfosSession.validation({ email, password });

    const user = await SessionsRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email or password', 401);
    }

    // const checkPasswordAlreadyExists = await compare(user.password, password);
    // console.log(`Body: ${password} e User ${user.password} = ${checkPasswordAlreadyExists}`);

    if (password !== user.password) {
      throw new AppError('Incorrect email or password', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, String(secret), {
      subject: String(user.id),
      expiresIn: expiresIn as string,
    });

    return { user, token };
  };
}

export default new AuthenticateService();
