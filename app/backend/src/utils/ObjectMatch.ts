interface IRequest {
  name: string;
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
}

const objectMatch = ({
  name, totalPoints,
  totalGames, totalVictories,
  totalDraws, totalLosses,
  goalsFavor, goalsOwn,
}: IRequest) => ({
  name,
  totalPoints,
  totalGames,
  totalVictories,
  totalDraws,
  totalLosses,
  goalsFavor,
  goalsOwn,
  goalsBalance: (goalsFavor - goalsOwn),
  efficiency: parseFloat(String(((totalPoints / (totalGames * 3)) * 100).toFixed(2))),
});

export default objectMatch;
