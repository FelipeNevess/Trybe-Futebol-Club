import MatchRepository from '../../repositories/implementations/MatchsRepositories';

interface IResponse {
  id: number;
  includeFinish: boolean;
}

class MatchService {
  static async execute({ id, includeFinish }: IResponse): Promise<string | void> {
    const result = await MatchRepository
      .update({ id, includeFinish });

    return result;
  }
}

export default MatchService;
