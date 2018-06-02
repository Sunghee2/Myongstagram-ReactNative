'use strict';
module.exports = (sequelize, DataTypes) => {
  var OAuthRefreshToken = sequelize.define('OAuthRefreshToken', {
    refreshToken: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
    scope: DataTypes.STRING,
    clientId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  OAuthRefreshToken.associate = function(models) {
  };
  return OAuthRefreshToken;
};