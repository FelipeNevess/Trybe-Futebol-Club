interface IMatchCreateRequestDTO {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

interface IMatchUpdateRequestDTO {
  id: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
  includeFinish?: boolean;
}

export { IMatchUpdateRequestDTO, IMatchCreateRequestDTO };
