import User from '../../../../database/models/User';
import { IResponseSession } from '../ISessionsRepositories';

class SessionsRepository {
  static async findByEmail(email: string): Promise<IResponseSession | null> {
    const user = await User.findOne({ where: { email } });

    return user;
  }
}

export default SessionsRepository;
