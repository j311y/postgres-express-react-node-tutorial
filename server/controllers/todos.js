'esversion: 6';

const Todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
        // description:  req.body.description,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
    },

  list(req, res) {
    return Todo
      .all()
      // .findAll({
      //   attribute: [title],
      //
      //   include: [{
      //     model: TodoItem,
      //     as: 'todoItems',
      //   }],
      //
      // })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
    },

  retrieve(req, res) {
    return Todo.findById(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return res.status(200).send(too);
    })
    .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
