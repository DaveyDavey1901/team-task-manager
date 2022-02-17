const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    team_manager: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id',
      },
    },

    team_member: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id',
      },
      team_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'task',
          key: 'id',
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;
