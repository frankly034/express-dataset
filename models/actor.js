'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.NUMBER,
      unique: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
  });
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};