interface IResponseRepository {
  clubName: string,
  homeMatch: [
    {
      homeTeamGoals: number,
      awayTeamGoals: number,
    },
  ],
}

interface IResponseMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatchInfo {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}

export {
  IResponseRepository,
  IResponseMatch,
  IMatchInfo,
};
