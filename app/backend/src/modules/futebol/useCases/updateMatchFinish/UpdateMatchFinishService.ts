import MatchRepository from '../../repositories/implementations/MatchsRepositories';
import IUpdateMatchFinish from './IUpdateMatchFinish';

class MatchService {
  static async execute({ id, includeFinish }: IUpdateMatchFinish): Promise<string | void> {
    const result = await MatchRepository
      .update({ id, includeFinish });

    return result;
  }
}

export default MatchService;
