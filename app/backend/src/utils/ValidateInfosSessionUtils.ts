import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

class ValidateInfosSessionUtils {
  static validation({ email, password }: IRequest) {
    switch (true) {
      case !email || !password:
        throw new AppError('All fields must be filled', 400);
      default:
        break;
    }
  }
}

export default ValidateInfosSessionUtils;
