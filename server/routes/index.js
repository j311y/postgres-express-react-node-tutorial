const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app)=> {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // app.get('api/todos/new', function(req, res) {
  //   res.render('todos');
  // });
  app.post('/api/todos', todosController.create);
  app.get('/api/todos/list', todosController.list);
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
};
