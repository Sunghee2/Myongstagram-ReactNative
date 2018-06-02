'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {});
 
  User.beforeValidate((user) => {
    return bcrypt.hash(user.password, 10).then( hash => {
      user.password_digest = hash;
    });
  });
  
  User.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password_digest);
  };

  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    delete values.password_digest;
    return values;
  };
  return User;
};