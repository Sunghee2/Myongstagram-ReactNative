'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OAuthTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accessToken: {
        type: Sequelize.STRING,
        unique: true
      },
      expiresAt: {
        type: Sequelize.DATE
      },
      scope: {
        type: Sequelize.STRING
      },
      clientId: {
        type: Sequelize.STRING,
        references: {
          model: 'OAuthClients',
          key: 'clientId',
          onDelete: 'cascade'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          onDelete: 'cascade'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(
      () => queryInterface.addIndex('OAuthTokens', ['accessToken'], {unique: true})
    ).then(
      () => queryInterface.addIndex('OAuthTokens', ['clientId'])
    ).then(
      () => queryInterface.addIndex('OAuthTokens', ['userId'])
    );
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('OAuthTokens');
  }
};