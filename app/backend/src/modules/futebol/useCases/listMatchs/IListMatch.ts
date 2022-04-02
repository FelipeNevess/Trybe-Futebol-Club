export default interface IResponse {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeClub: {
    clubName: string
  },
  awayClub: {
    clubName: string
  }
}
