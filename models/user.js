'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.posts, {
        onDelete: "CASCADE"
      })
      User.hasMany(models.comment,{
        onDelete: "CASCADE"
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING, 
      validate: {
        isEmail: true
      }
    },
    gitHubID: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    //birthday: DataTypes.DATE, 
    diyInterests: DataTypes.STRING,
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },  
    hobbies: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, 
  
  {
    
    sequelize,
    modelName: 'User',
  });
  // // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // User.beforeCreate(function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
  return User;
};

