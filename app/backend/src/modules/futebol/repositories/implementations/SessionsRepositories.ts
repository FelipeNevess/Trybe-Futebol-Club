import User from '../../../../database/models/User';
import {
  IResponseSession,
  ICreateSessionDTO,
} from '../ISessionsRepositories';

class SessionsRepository {
  static async create({ email, password }: ICreateSessionDTO): Promise<void> {
    await User.create({ email, password });
  }

  static async findByEmail(email: string): Promise<IResponseSession | null> {
    const user = await User.findOne({ where: { email } });

    return user;
  }
}

export default SessionsRepository;
