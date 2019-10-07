'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.NUMBER,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, {
    timestamps: false,
  });
  Repo.associate = function(models) {
    // associations can be defined here
  };
  return Repo;
};