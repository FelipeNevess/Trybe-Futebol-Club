import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

class ValidateInfosSessionUtils {
  static validation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const verofyEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

    switch (true) {
      case !email || !password:
        throw new AppError('All fields must be filled');
      case !verofyEmail:
        throw new AppError('Error, the email format must be "@" and "."');
      case password.length <= 6:
        throw new AppError('Password must be at least 6 characters long');
      default:
        next();
    }
  }
}

export default ValidateInfosSessionUtils;
