import MatchRepository from '../../repositories/implementations/MatchsRepositories';

class MatchService {
  static async execute(): Promise<Array<object>> {
    const match = await MatchRepository.index();

    return match;
  }
}

export default MatchService;
