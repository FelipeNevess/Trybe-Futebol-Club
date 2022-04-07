import LeaderBoardRepository from '../../repositories/implementations/LeaderBoardRepositories';

import LeaderBoardHomeUseCase from '../listLeaderBoardHome/LeaderBoardHomeUseCase';
import LeaderBoardAwayUseCase from '../listLeaderBoardAway/LeaderBoardAwayUseCase';
import LeaderBoardUseCase from './LeaderBoardUseCase';

import LeaderBoardController from './LeaderBoardController';

const leaderBoardRepository = new LeaderBoardRepository();
const leaderBoardHomeUseCase = new LeaderBoardHomeUseCase(leaderBoardRepository);
const leaderBoardAwayUseCase = new LeaderBoardAwayUseCase(leaderBoardRepository);
const leaderBoardUseCase = new LeaderBoardUseCase(leaderBoardHomeUseCase, leaderBoardAwayUseCase);

const leaderBoardController = new LeaderBoardController(leaderBoardUseCase);

export default leaderBoardController;
