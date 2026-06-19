import LoginPage from '../../pages/LoginPage';
import SecureAreaPage from '../../pages/SecureAreaPage';

const validUsername = Cypress.env('username');
const validPassword = Cypress.env('password');
const invalidUsername = Cypress.env('invalidUsername');
const invalidPassword = Cypress.env('invalidPassword');

describe('Smoke | Authentication', () => {
  it('SMOKE-LOGIN-001 - logs in with valid credentials', () => {
    LoginPage.visit();
    LoginPage.login(validUsername, validPassword);

    SecureAreaPage.assertSuccessfulLogin();
  });

  it('SMOKE-LOGIN-002 - rejects invalid credentials', () => {
    LoginPage.visit();
    LoginPage.login(invalidUsername, invalidPassword);

    LoginPage.assertInvalidLoginMessage();
  });
});
