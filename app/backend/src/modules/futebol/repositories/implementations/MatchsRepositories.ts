import Match from '../../../../database/models/Matche';
import Club from '../../../../database/models/Club';

import {
  IMatchUpdateRequestDTO,
  ICreateMatch,
  IMatchCreateRequestDTO,
} from '../IMatchsRepositories';

class MatchRepository implements ICreateMatch {
  async index(): Promise<object[]> {
    this.index = this.index.bind(this);

    const matches = await Match.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  async show(id: number): Promise<IMatchCreateRequestDTO | null> {
    this.show = this.show.bind(this);

    const result = await Match.findByPk(id);

    return result;
  }

  async update({
    id,
    homeTeamGoals,
    awayTeamGoals,
    includeFinish,
  }: IMatchUpdateRequestDTO): Promise< string | void > {
    this.update = this.update.bind(this);

    if (includeFinish) {
      await Match.update({ inProgress: false }, { where: { id } });

      return 'Update finish';
    }

    await Match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id, inProgress: true } },
    );

    return 'Update match';
  }

  async create({
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
