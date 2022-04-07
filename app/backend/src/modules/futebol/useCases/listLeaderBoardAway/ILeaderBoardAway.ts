interface IResponseRepository {
  clubName: string,
  awayMatch: [
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

export {
  IResponseRepository,
  IResponseMatch,
};
