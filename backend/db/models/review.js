'use strict';

const {User} = require('./index')
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

  Review.prototype.getCreator = async function(){
    const {userId} = this

    let user = await User.findByPk(userId)

    let name = user.username

    return name
  }

  Review.getUserReviews = async function(userId){
    let reviews = await Review.findAll({
      where:{
        userId
      }
    })
    return reviews
  }
  Review.getDrinkReviews = async function(drinkId){
      let reviews = await Review.findAll({
        where:{
          drinkId
        }
      })
      return reviews
  }
  Review.getDrinkRating = async function(drinkId){
    const avgRating = await Review.findAll({
      raw: true,
      where: {
          drinkId
      },
      attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'avg']]
    })
    return avgRating
  }

  Review.getReviewCount = async function(drinkId){
    const numOfReviews = await Review.findAll({
      where:{
        drinkId
      }
    }).length

    return numOfReviews
  }
  return Review;
};
