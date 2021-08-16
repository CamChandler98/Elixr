'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creatorId: DataTypes.INTEGER,
    thumbnailUrl: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {});
  Drink.associate = function(models) {
    // associations can be defined here
  };
  return Drink;
};