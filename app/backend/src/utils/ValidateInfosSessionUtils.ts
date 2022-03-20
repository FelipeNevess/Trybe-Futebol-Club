import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

class ValidateInfosSessionUtils {
  static validation({ email, password }: IRequest) {
    const verofyEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

    switch (true) {
      case !email || !password:
        throw new AppError('All fields must be filled');
      case !verofyEmail:
        throw new AppError('Error, the email format must be "@" and "."');
      case password.length <= 6:
        throw new AppError('Password must be at least 6 characters long');
      default:
        break;
    }
  }
}

export default ValidateInfosSessionUtils;
