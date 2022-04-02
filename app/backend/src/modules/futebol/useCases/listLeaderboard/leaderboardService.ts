import LeaderBoardRepositories from '../../repositories/implementations/LeaderBoardRepositories';
import { IMatchInfo, IResponseMatch, IResponseRepository } from './ILeaderBoardService';

class LeaderBoardService {
  awayPoints = 0;

  homePoints = 0;

  homeGame = 0;

  awayGame = 0;

  victoriesHome = 0;

  victoriesAway = 0;

  lossesHome = 0;

  lossesAway = 0;

  drawsHome = 0;

  drawsAway = 0;

  goalsFavorHome = 0;

  goalsFavorAway = 0;

  goalsOwnHome = 0;

  goalsOwnAway = 0;

  homeMatchPoints: IResponseMatch[];

  awayMatchPoints: IResponseMatch[];

  resetAttributes(reset: string) {
    if (reset === 'Home') {
      this.homePoints = 0;
      this.victoriesHome = 0;
      this.lossesHome = 0;
      this.drawsHome = 0;
      this.goalsFavorHome = 0;
      this.goalsOwnHome = 0;
      return;
    }

    this.awayPoints = 0;
    this.victoriesAway = 0;
    this.lossesAway = 0;
    this.drawsAway = 0;
    this.goalsFavorAway = 0;
    this.goalsOwnAway = 0;
  }

  calculateHome() {
    const result = this.homeMatchPoints;

    result.forEach(({ awayTeamGoals, homeTeamGoals }, i) => {
      if (i === 0) { this.resetAttributes('Home'); }

      this.goalsFavorHome += homeTeamGoals;
      this.goalsOwnHome += awayTeamGoals;
      this.homeGame = result.length;

      if (homeTeamGoals > awayTeamGoals) { this.homePoints += 3; this.victoriesHome += 1; }
      if (homeTeamGoals < awayTeamGoals) { this.homePoints += 0; this.lossesHome += 1; }
      if (homeTeamGoals === awayTeamGoals) { this.homePoints += 1; this.drawsHome += 1; }
    });
  }

  calculateAway() {
    const result = this.awayMatchPoints;

    result.forEach(({ awayTeamGoals, homeTeamGoals }, i) => {
      if (i === 0) { this.resetAttributes('Away'); }

      this.goalsFavorAway += awayTeamGoals;
      this.goalsOwnAway += homeTeamGoals;
      this.awayGame = result.length;

      if (awayTeamGoals > homeTeamGoals) { this.awayPoints += 3; this.victoriesAway += 1; }
      if (awayTeamGoals < homeTeamGoals) { this.awayPoints += 0; this.lossesAway += 1; }
      if (awayTeamGoals === homeTeamGoals) { this.awayPoints += 1; this.drawsAway += 1; }
    });
  }

  executeCalculate(home: IResponseMatch[], away: IResponseMatch[]) {
    this.homeMatchPoints = home;
    this.awayMatchPoints = away;

    this.calculateHome();
    this.calculateAway();
  }

  objectMatch(name: string) {
    return {
      name,
      totalPoints: this.homePoints,
      totalGames: this.homeGame,
      totalVictories: this.victoriesHome,
      totalDraws: this.drawsHome,
      totalLosses: this.lossesHome,
      goalsFavor: this.goalsFavorHome,
      goalsOwn: this.goalsOwnHome,
      goalsBalance: (this.goalsFavorHome - this.goalsOwnHome),
      efficiency: parseFloat(String(((this.homePoints / (this.homeGame * 3)) * 100).toFixed(2))),
    };
  }

  sortMatch = (teamA: IMatchInfo, teamB: IMatchInfo): number => {
    if (teamB.totalPoints > teamA.totalPoints) return 1;
    if (teamB.totalPoints < teamA.totalPoints) return -1;
    if (teamB.totalVictories > teamA.totalVictories) return 1;
    if (teamB.totalVictories < teamA.totalVictories) return -1;
    if (teamB.goalsBalance > teamA.goalsBalance) return 1;
    if (teamB.goalsBalance < teamA.goalsBalance) return -1;
    if (teamB.goalsFavor > teamA.goalsFavor) return 1;
    if (teamB.goalsFavor < teamA.goalsFavor) return -1;
    if (teamB.goalsOwn > teamA.goalsOwn) return 1;
    if (teamB.goalsOwn < teamA.goalsOwn) return -1;
    return 0;
  };

  async execute() {
    const result = await LeaderBoardRepositories.index() as IResponseRepository[];
    const response = await Promise.all(
      result
        .map(async ({ homeMatch, awayMatch, clubName }) => {
          this.executeCalculate(homeMatch, awayMatch);
          return this.objectMatch(clubName);
        }),
    );

    return response.sort(this.sortMatch);
  }
}

export default new LeaderBoardService();

// return {
//   name,
//   totalPoints: this.homePoints + this.awayPoints,
//   totalGames: this.homeGame + this.awayGame,
//   totalVictories: this.victoriesHome + this.victoriesAway,
//   totalDraws: this.drawsHome + this.drawsAway,
//   totalLosses: this.lossesHome + this.lossesAway,
//   goalsFavor: this.goalsFavorHome + this.goalsFavorAway,
//   goalsOwn: this.goalsOwnHome + this.goalsOwnAway,
//   goalsBalance:
//     (this.goalsFavorHome + this.goalsFavorAway) - (this.goalsOwnHome + this.goalsOwnAway),
//   efficiency: parseFloat(String(contEfficiency.toFixed(2))),
// };

// const contEfficiency = (((this.homePoints + this.awayPoints)
//   / ((this.homeGame + this.awayGame) * 3)) * 100);
