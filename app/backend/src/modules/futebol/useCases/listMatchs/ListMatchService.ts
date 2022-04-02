import MatchRepository from '../../repositories/implementations/MatchsRepositories';
import IListMatch from './IListMatch';

class MatchService {
  static async execute(inProgress?: string): Promise<Array<object>> {
    const match = await MatchRepository.index() as IListMatch[];

    if (inProgress) {
      const findByInProgress = match
        .filter((item) => String(item.inProgress) === inProgress);

      return findByInProgress;
    }

    return match;
  }
}

export default MatchService;
