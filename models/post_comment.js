'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post_comment.belongsTo(models.Users)
      
    }
  };
  Post_comment.init({
    postID: DataTypes.INTEGER,
    parentID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post_comment',
  });
  return Post_comment;
};