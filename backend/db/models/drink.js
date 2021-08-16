'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        len: [3,200]
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [3,600]
      }
    },
    creatorId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
  }, {});
  Drink.associate = function(models) {
    // associations can be defined here
    Drink.belongsToMany(models.Category, {foreignKey: 'categoryId'})
    Drink.belongsToMany(models.User, {foreignKey: 'creatorId'})
  };
  return Drink;
};
