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
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Drink.associate = function(models) {
    // associations can be defined here
    Drink.belongsTo(models.Category, {foreignKey: 'categoryId'})
    Drink.belongsTo(models.User, {foreignKey: 'creatorId'})
  };

  Drink.prototype.toImportant = function(){
    const {name,description,creatorId,categoryId} = this
    return {name,description,creatorId,categoryId}
  }

  Drink.makeDrink = async function ({name, description, creatorId, categoryId}) {
    const drink = await Drink.create({
      name,
      description,
      creatorId,
      categoryId
    })
    return drink.toImportant()
  }
  return Drink;
};
