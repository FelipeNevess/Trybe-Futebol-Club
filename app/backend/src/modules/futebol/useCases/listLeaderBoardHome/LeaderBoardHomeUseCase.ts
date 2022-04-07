import LeaderBoardRepositories from '../../repositories/ILeaderBoardRepository';
import { IResponseMatch, IResponseRepository } from './ILeaderBoardHome';
import { sortMatch } from '../../../../utils/SortMatch';
import objectMatch from '../../../../utils/ObjectMatch';

class LeaderBoardHomeUseCase {
  homePoints = 0;

  homeGame = 0;

  victoriesHome = 0;

  drawsHome = 0;

  lossesHome = 0;

  goalsFavorHome = 0;

  goalsOwnHome = 0;

  homeMatchPoints: IResponseMatch[];

  constructor(
    private leaderBoardRepositories: LeaderBoardRepositories,
  ) {}

  resetAttributes(): void {
    this.homePoints = 0;
    this.victoriesHome = 0;
    this.lossesHome = 0;
    this.drawsHome = 0;
    this.goalsFavorHome = 0;
    this.goalsOwnHome = 0;
  }

  calculateHome(): void {
    const result = this.homeMatchPoints;

    result.forEach(({ awayTeamGoals, homeTeamGoals }, i) => {
      if (i === 0) { this.resetAttributes(); }

      this.goalsFavorHome += homeTeamGoals;
      this.goalsOwnHome += awayTeamGoals;
      this.homeGame = result.length;

      if (homeTeamGoals > awayTeamGoals) { this.homePoints += 3; this.victoriesHome += 1; }
      if (homeTeamGoals < awayTeamGoals) { this.homePoints += 0; this.lossesHome += 1; }
      if (homeTeamGoals === awayTeamGoals) { this.homePoints += 1; this.drawsHome += 1; }
    });
  }

  executeCalculate(home: IResponseMatch[]): void {
    this.homeMatchPoints = home;

    this.calculateHome();
  }

  async execute() {
    const result = await this.leaderBoardRepositories.index() as IResponseRepository[];
    const response = await Promise.all(
      result.map(async ({ homeMatch, clubName }) => {
        this.executeCalculate(homeMatch);

        return objectMatch({
          name: clubName,
          totalPoints: this.homePoints,
          totalGames: this.homeGame,
          totalVictories: this.victoriesHome,
          totalDraws: this.drawsHome,
          totalLosses: this.lossesHome,
          goalsFavor: this.goalsFavorHome,
          goalsOwn: this.goalsOwnHome,
        });
      }),
    );

    return response.sort(sortMatch);
  }
}

export default LeaderBoardHomeUseCase;
