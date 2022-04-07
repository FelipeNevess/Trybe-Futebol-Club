import LeaderBoardRepositories from '../../repositories/ILeaderBoardRepository';
import { IResponseMatch, IResponseRepository } from './ILeaderBoardAway';
import { sortMatch } from '../../../../utils/SortMatch';
import objectMatch from '../../../../utils/ObjectMatch';

class LeaderBoardAwayUseCase {
  awayPoints = 0;

  awayGame = 0;

  victoriesAway = 0;

  drawsAway = 0;

  lossesAway = 0;

  goalsFavorAway = 0;

  goalsOwnAway = 0;

  awayMatchPoints: IResponseMatch[];

  constructor(
    private leaderBoardRepositories: LeaderBoardRepositories,
  ) {}

  resetAttributes(): void {
    this.awayPoints = 0;
    this.victoriesAway = 0;
    this.lossesAway = 0;
    this.drawsAway = 0;
    this.goalsFavorAway = 0;
    this.goalsOwnAway = 0;
  }

  calculateAway(): void {
    const result = this.awayMatchPoints;

    result.forEach(({ awayTeamGoals, homeTeamGoals }, i) => {
      if (i === 0) { this.resetAttributes(); }

      this.goalsFavorAway += awayTeamGoals;
      this.goalsOwnAway += homeTeamGoals;
      this.awayGame = result.length;

      if (awayTeamGoals > homeTeamGoals) { this.awayPoints += 3; this.victoriesAway += 1; }
      if (awayTeamGoals < homeTeamGoals) { this.awayPoints += 0; this.lossesAway += 1; }
      if (awayTeamGoals === homeTeamGoals) { this.awayPoints += 1; this.drawsAway += 1; }
    });
  }

  executeCalculate(away: IResponseMatch[]): void {
    this.awayMatchPoints = away;

    this.calculateAway();
  }

  async execute() {
    const result = await this.leaderBoardRepositories.index() as IResponseRepository[];

    const response = await Promise.all(
      result.map(async ({ awayMatch, clubName }) => {
        this.executeCalculate(awayMatch);

        return objectMatch({
          name: clubName,
          totalPoints: this.awayPoints,
          totalGames: this.awayGame,
          totalVictories: this.victoriesAway,
          totalDraws: this.drawsAway,
          totalLosses: this.lossesAway,
          goalsFavor: this.goalsFavorAway,
          goalsOwn: this.goalsOwnAway,
        });
      }),
    );

    return response.sort(sortMatch);
  }
}

export default LeaderBoardAwayUseCase;
