import { ICreateMatch } from '../../repositories/IMatchsRepositories';
import IUpdateMatchFinish from './IUpdateMatchFinish';

class UpdateMatchFinishUseCase {
  constructor(private createMatch: ICreateMatch) {}

  async execute({ id, includeFinish }: IUpdateMatchFinish): Promise<string | void> {
    const result = await this.createMatch.update({ id, includeFinish });

    return result;
  }
}

export default UpdateMatchFinishUseCase;
