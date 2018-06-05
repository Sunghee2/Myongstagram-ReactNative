'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    context: {
      type: DataTypes.STRING,
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};