import MatchRepository from '../../repositories/implementations/MatchsRepositories';

interface IResponse {
  id: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
  includeFinish?: boolean;
  inProgress?: boolean;
}

class MatchService {
  static async execute({
    id,
    includeFinish,
    awayTeamGoals,
    homeTeamGoals,
    inProgress,
  }: IResponse): Promise<void> {
    await MatchRepository.update({
      id,
      includeFinish,
      awayTeamGoals,
      homeTeamGoals,
      inProgress,
    });
  }
}

export default MatchService;
