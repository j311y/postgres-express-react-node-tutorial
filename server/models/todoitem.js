'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content:  {
      type: DataTypes.STRING,
      allowNull: false,
    },

    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        TodoItem.belogsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return TodoItem;
};
