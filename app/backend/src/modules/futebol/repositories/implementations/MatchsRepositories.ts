import Match from '../../../../database/models/Matche';
import Club from '../../../../database/models/Club';

class MatchRepository {
  static async index(inProgress?: string): Promise<Array<object>> {
    const matches = !inProgress as boolean ? await Match.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    })
      : Match.findAll({
        where: { inProgress },
        include: [
          { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
          { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
        ],
      });

    return matches;
  }
}

export default MatchRepository;
