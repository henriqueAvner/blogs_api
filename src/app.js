const express = require('express');
const { userController, categoryController, postController } = require('./controllers');
const { validateDisplayName,
  validateEmailFormat,
  validatePasslength,
  validateLogin } = require('./middlewares/newUser.middleware');
const { validateToken } = require('./middlewares/auth.middleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', validateLogin, userController.loginController);
app.post(
  '/user',
  validateDisplayName,
  validateEmailFormat,
  validatePasslength,
  userController.addUserController,
);
app.post('/categories', validateToken, categoryController.addNewCategory);
app.get('/categories', validateToken, categoryController.getAllCategories);

app.get('/post', validateToken, postController.findAllPosts);
app.get('/post/:id', validateToken, postController.findPostById);
app.post('/post', validateToken, postController.insertNewPost);

app.get('/user', validateToken, userController.getAllUsers);
app.get('/user/:id', validateToken, userController.getUserById);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
