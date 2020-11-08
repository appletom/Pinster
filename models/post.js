'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.Users)
      models.Post.hasMany(models.Post_comment)
    }
  };
  Post.init({
    postID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT, 
    photo:DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};