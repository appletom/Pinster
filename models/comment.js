'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.User, {
        foreignKey: id,
        allowNull: false
      }),
      comment.belongsTo(models.posts, {
          foreignKey: title,
          allowNull: true
      })
    }
  
  };
  comment.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};