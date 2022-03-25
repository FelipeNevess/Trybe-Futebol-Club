import MatchRepository from '../../repositories/implementations/MatchsRepositories';

interface IResponse {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeClub: {
    clubName: string
  },
  awayClub: {
    clubName: string
  }
}

class MatchService {
  static async execute(inProgress?: string): Promise<Array<object>> {
    const match = await MatchRepository.index() as IResponse[];

    if (inProgress) {
      const findByInProgress = match
        .filter((item) => String(item.inProgress) === inProgress);

      return findByInProgress;
    }

    return match;
  }
}

export default MatchService;
