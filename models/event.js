'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.NUMBER,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  Event.associate = function(models) {
    Event.belongsTo(models.Actor, {
      foreignKey: 'actorId',
      target: 'id',
      as: 'actor',
      onDelete: 'CASCADE'
    });

    Event.belongsTo(models.Repo, {
      foreignKey: 'repoId',
      target: 'id',
      as: 'repo',
      onDelete: 'CASCADE'
    });
  };
  return Event;
};