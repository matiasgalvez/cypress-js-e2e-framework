import BasePage from './BasePage';

class LoginPage extends BasePage {
  visit() {
    super.visit('/login');
  }

  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get flashMessage() {
    return cy.get('#flash');
  }

  login(username, password) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password, { log: false });
    this.loginButton.click();
  }

  assertInvalidLoginMessage() {
    this.flashMessage.should('be.visible').and('contain.text', 'Your username is invalid!');
  }
}

export default new LoginPage();
