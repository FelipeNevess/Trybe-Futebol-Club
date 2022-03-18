import { Model, DataTypes } from 'sequelize';
import db from '.';
import Club from './Club';

class Match extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGols: number;

  public awayTeam: number;

  public awayTeamGols: number;

  public inProgress: number;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGols: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGols: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Match',
  tableName: 'matchs',
  timestamps: false,
});

Club.belongsTo(Match, { foreignKey: 'homeTeam', as: 'match' });
Club.belongsTo(Match, { foreignKey: 'awayTeam', as: 'match' });

Match.hasMany(Club, { foreignKey: 'homeTeam', as: 'club' });
Match.hasMany(Club, { foreignKey: 'awayTeam', as: 'club' });

export default Match;
