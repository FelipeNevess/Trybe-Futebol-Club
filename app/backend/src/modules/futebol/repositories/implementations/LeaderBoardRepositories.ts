import Club from '../../../../database/models/Club';
import Match from '../../../../database/models/Matche';
import ILeaderBoraderRepository from '../ILeaderBoardRepository';

class LeaderBoardRepositories implements ILeaderBoraderRepository {
  async index(): Promise<Array<object>> {
    this.index = this.index.bind(this);

    const matches = await Club.findAll({
      include: [
        {
          model: Match,
          as: 'homeMatch',
          where: { inProgress: false },
        },
        {
          model: Match,
          as: 'awayMatch',
          where: { inProgress: false },
        },
      ],
    });

    return matches;
  }
}

export default LeaderBoardRepositories;
