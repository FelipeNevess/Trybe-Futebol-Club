export interface IRequestUseCase {
  id: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}

export interface IRequestBody {
  homeTeamGoals: number;
  awayTeamGoals: number;
}
