import User from '../../../../database/models/User';
import {
  ICreateSessionsRepositories, ICreateSessionsRepositoriesDTO } from '../ISessionsRepositories';

class SessionsRepository implements ICreateSessionsRepositories {
  async findByEmail(email: string): Promise<ICreateSessionsRepositoriesDTO | null> {
    this.findByEmail = this.findByEmail.bind(this);

    const user = await User.findOne({ where: { email } });

    return user;
  }
}

export default SessionsRepository;
