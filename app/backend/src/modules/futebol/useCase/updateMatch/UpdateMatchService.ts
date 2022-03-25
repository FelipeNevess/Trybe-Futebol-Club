import MatchRepository from '../../repositories/implementations/MatchsRepositories';

interface IResponse {
  id: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
  includeFinish?: boolean;
}

class MatchService {
  static async execute({
    id,
    includeFinish,
    awayTeamGoals,
    homeTeamGoals,
  }: IResponse): Promise<string | void> {
    const result = await MatchRepository.update({
      id,
      includeFinish,
      awayTeamGoals,
      homeTeamGoals,
    });

    return result;
  }
}

export default MatchService;
