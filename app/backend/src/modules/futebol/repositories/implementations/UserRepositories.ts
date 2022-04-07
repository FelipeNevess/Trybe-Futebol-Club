import User from '../../../../database/models/User';
import { IUserRepositories, IGetByUserId } from '../IUserRepositories';

class UserRepositories implements IGetByUserId {
  async show(id: number): Promise<IUserRepositories | null> {
    this.show = this.show.bind(this);

    const user = await User.findByPk(id);

    return user;
  }
}

export default UserRepositories;
