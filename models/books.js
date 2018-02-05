'use strict';
module.exports = (sequelize, DataTypes) => {
  var books = sequelize.define('books', {
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    like: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books;
};