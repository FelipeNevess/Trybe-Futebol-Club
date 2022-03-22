import MatchRepository from '../../repositories/implementations/MatchsRepositories';

class MatchService {
  static async execute(inProgress?: string): Promise<Array<object>> {
    const match = await MatchRepository.index(inProgress);

    return match;
  }
}

export default MatchService;
