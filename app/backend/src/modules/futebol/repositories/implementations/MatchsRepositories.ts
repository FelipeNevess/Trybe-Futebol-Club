import Match from '../../../../database/models/Matche';
import Club from '../../../../database/models/Club';

import { IMatchCreateRequestDTO, IMatchUpdateRequestDTO } from '../IMatchsReponsitories';

class MatchRepository {
  static async index(): Promise<Array<object>> {
    const matches = await Match.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  static async show(id: number): Promise<IMatchCreateRequestDTO | null> {
    const result = await Match.findByPk(id);

    return result;
  }

  static async update({ id, homeTeamGoals, awayTeamGoals, includeFinish, inProgress }:
  IMatchUpdateRequestDTO): Promise<void> {
    if (includeFinish) {
      await Match.update({ inProgress: false }, { where: { id } });
    }

    if (!includeFinish) {
      await Match.update(
        { homeTeamGoals, awayTeamGoals, inProgress },
        { where: { id } },
      );
    }
  }

  static async create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  }: IMatchCreateRequestDTO): Promise<IMatchCreateRequestDTO | null> {
    const { id } = await Match.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });

    const result = await this.show(id);

    return result;
  }
}

export default MatchRepository;
