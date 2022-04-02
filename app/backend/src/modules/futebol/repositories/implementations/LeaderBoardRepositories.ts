import Club from '../../../../database/models/Club';
import Match from '../../../../database/models/Matche';

class LeaderBoardRepositories {
  static async index(): Promise<Array<object>> {
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
