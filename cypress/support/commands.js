import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
  LoginPage.visit();
  LoginPage.login(username, password);
});
