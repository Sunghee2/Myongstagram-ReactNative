'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
    Post.hasMany(models.Like, {foreignKey: 'postId', targetKey: 'id', onDelete: 'CASCADE'});

  };
  return Post;
};