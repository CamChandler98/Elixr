'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userOneId: DataTypes.INTEGER,
    userTwoId: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
    Friend.belongsTo(models.User, {foreignKey: 'userOneId'})
    Friend.belongsTo(models.User, {foreignKey: 'userTwoId'})
  };
  return Friend;
};
