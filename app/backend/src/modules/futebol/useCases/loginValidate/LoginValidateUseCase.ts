import AppError from '../../../../errors/AppError';
import { IGetByUserId } from '../../repositories/IUserRepositories';
import { IResponse } from './ILoginValidate';

class LoginValidadeUserCase {
  constructor(private getByUserId: IGetByUserId) {}

  async execute(id: number): Promise<IResponse> {
    const alreadyExists = await this.getByUserId.show(id);

    if (!alreadyExists) {
      throw new AppError('Incorrect email or password', 401);
    }

    return alreadyExists;
  }
}

export default LoginValidadeUserCase;
