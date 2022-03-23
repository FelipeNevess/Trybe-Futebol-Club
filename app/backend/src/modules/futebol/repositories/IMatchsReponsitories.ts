interface IMatchCreateRequestDTO {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

interface IMatchUpdateRequestDTO {
  id: number;
  includeFinish?: boolean;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}

export { IMatchUpdateRequestDTO, IMatchCreateRequestDTO };
