'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [3,2000]
        }
      },
    rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate:{
          min:0,
          max:5
        }
      },
    imageUrl: {
       type: DataTypes.STRING,
      },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    drinkId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Drink, {foreignKey: 'drinkId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};