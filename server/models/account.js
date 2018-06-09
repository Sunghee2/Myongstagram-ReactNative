'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
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
 
  Account.beforeValidate((account) => {
    return bcrypt.hash(account.password, 10).then( hash => {
      account.password_digest = hash;
    });
  });
  
  Account.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password_digest);
  };

  Account.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    delete values.password_digest;
    return values;
  };
  return Account;
};