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

interface ICreateMatch {
  index(): Promise<Array<object>>
  show(id: number): Promise<IMatchCreateRequestDTO | null>
  update({
    id,
    homeTeamGoals,
    awayTeamGoals,
    includeFinish,
  }: IMatchUpdateRequestDTO): Promise<void | string>
  create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  }: IMatchCreateRequestDTO): Promise<IMatchCreateRequestDTO | null>
}

export { ICreateMatch, IMatchUpdateRequestDTO, IMatchCreateRequestDTO };
