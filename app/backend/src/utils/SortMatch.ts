interface IMatchSort {
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

interface IMatchSortName {
  name: string;
}

const resetSort = (A: IMatchSortName, B: IMatchSortName) => {
  if (A.name > B.name) {
    return -1;
  }

  return 0;
};

const sortMatch = (teamA: IMatchSort, teamB: IMatchSort): number => {
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

export {
  resetSort,
  sortMatch,
};
