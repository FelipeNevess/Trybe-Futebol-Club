import LeaderBoardHomeUserCase from '../listLeaderBoardHome/LeaderBoardHomeUseCase';
import LeaderBoardAwayUserCase from '../listLeaderBoardAway/LeaderBoardAwayUseCase';
import { resetSort, sortMatch } from '../../../../utils/SortMatch';

class LeaderBoardAwayUseCase {
  constructor(
    private leaderBoardHomeUserCase: LeaderBoardHomeUserCase,
    private leaderBoardAwayUserCase: LeaderBoardAwayUserCase,
  ) {}

  async execute() {
    const leaderHome = await this.leaderBoardHomeUserCase.execute();
    const leaderAway = await this.leaderBoardAwayUserCase.execute();

    const Home = leaderHome.sort(resetSort);
    const Away = leaderAway.sort(resetSort);

    return Home.map((item, i) => ({
      name: item.name,
      totalPoints: item.totalPoints + Away[i].totalPoints,
      totalGames: item.totalGames + Away[i].totalGames,
      totalVictories: item.totalVictories + Away[i].totalVictories,
      totalDraws: item.totalDraws + Away[i].totalDraws,
      totalLosses: item.totalLosses + Away[i].totalLosses,
      goalsFavor: item.goalsFavor + Away[i].goalsFavor,
      goalsOwn: item.goalsOwn + Away[i].goalsOwn,
      goalsBalance: (item.goalsFavor + Away[i].goalsFavor) - (item.goalsOwn + Away[i].goalsOwn),
      efficiency: parseFloat(String((((
        item.totalPoints + Away[i].totalPoints) / ((item.totalGames + Away[i].totalGames) * 3
      )) * 100).toFixed(2))),
    })).sort(sortMatch);
  }
}

export default LeaderBoardAwayUseCase;
