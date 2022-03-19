import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

function UserAuthenticated(req: Request, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token does not exist', 401);
  }

  const [, token] = authHeader.split('');

  const { secret } = authConfig.jwt;

  try {
    const decoded: unknown = verify(token, secret as string);

    const { sub } = decoded as ITokenPayload;

    req.user = { id: sub };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}

export default UserAuthenticated;
