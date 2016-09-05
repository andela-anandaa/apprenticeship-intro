'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return User;
};