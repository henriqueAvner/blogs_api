const express = require('express');
const { userController } = require('./controllers');
const { validateDisplayName,
  validateEmailFormat,
  validatePasslength } = require('./middlewares/newUser.middleware');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.post('/login', userController.loginController);
app.post(
  '/user',
  validateDisplayName,
  validateEmailFormat,
  validatePasslength,
  userController.addUserController,
);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
