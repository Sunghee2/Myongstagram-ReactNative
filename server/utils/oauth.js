const db = require('../models');

const m = {};

m.getClient = async function(clientId, clientSecret) {
  let params = { clientId: clientId };
  if (clientSecret) {
    params.clientSecret = clientSecret;
  }
  const result = await db.OAuthClient.findOne({ where: params });
  
  if (!result) {
    return null;
  }
  return {
    id: result.clientId,
    redirectUris: [result.redirectUri],
    grants: ['password', 'refresh_token']
  };
};

m.getUser = async function(username, password) {
  const user = await db.User.findOne({where: {username: username}});
  if (!user) {
    return null;
  }
  if (await user.validatePassword(password)) {
    return user;
  } else {
    return null;
  }
};

m.saveToken = async function(token, client, user) {
  const promises = [
    db.OAuthToken.create({
      accessToken: token.accessToken,
      expiresAt: token.accessTokenExpiresAt,
      scope: token.scope,
      clientId: client.id,
      userId: user.id,
    }),
    db.OAuthRefreshToken.create({
      refreshToken: token.refreshToken,
      expiresAt: token.refreshTokenExpiresAt,
      scope: token.scope,
      clientId: client.id,
      userId: user.id,
    })
  ];
  const [accessToken, refreshToken] = await Promise.all(promises);
  return {
    accessToken: accessToken.accessToken,
    accessTokenExpiresAt: accessToken.expiresAt,
    refreshToken: refreshToken.refreshToken,
    refreshTokenExpiresAt: refreshToken.expiresAt,
    scope: accessToken.scope,
    client: { id: accessToken.clientId },
    user: { id: accessToken.userId }
  };
};

m.getAccessToken = async function (accessToken) {
  const token = await db.OAuthToken.findOne({ 
    where: { accessToken: accessToken } 
  });
  if (!token) {
    return null;
  }
  return {
    accessToken: token.access_token,
    accessTokenExpiresAt: token.expiresAt,
    scope: token.scope,
    client: { id: token.clientId },
    user: { id: token.userId }
  };
};

module.exports = m;