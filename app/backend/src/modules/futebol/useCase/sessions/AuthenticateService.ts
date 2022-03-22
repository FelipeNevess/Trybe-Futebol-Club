import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import AppError from '../../../../errors/AppError';
import authConfig from '../../../../config/auth';
import SessionsRepository from '../../repositories/implementations/SessionsRepositories';
import ValidateInfosSessionUtils from '../../../../utils/ValidateInfosSessionUtils';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateService {
  static async execute({ email, password }: IRequest) {
    ValidateInfosSessionUtils.validation({ email, password });
    const user = await SessionsRepository.findByEmail(email);

    if (!user) { throw new AppError('Incorrect email or password', 401); }

    const passwordHash = await compare(password, user.password);

    if (!passwordHash) { throw new AppError('Incorrect email or password', 401); }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, { subject: String(user.id), expiresIn: expiresIn as string });

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

export default AuthenticateService;
