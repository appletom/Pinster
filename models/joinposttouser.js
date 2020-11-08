'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinPostToUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.Users)
    }
  };
  joinPostToUser.init({
    postID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinPostToUser',
  });
  return joinPostToUser;
};