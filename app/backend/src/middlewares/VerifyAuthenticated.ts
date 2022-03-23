import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface ITokenPayload {
  sub: string;
}

function UserAuthenticated(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not found', 401);
  }

  const [, token] = authHeader.split(' ');
  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);
    const { sub } = decoded as ITokenPayload;

    req.body.user = { id: sub };

    next();
  } catch {
    throw new AppError('Token expired or invalid', 401);
  }
}

export default UserAuthenticated;
