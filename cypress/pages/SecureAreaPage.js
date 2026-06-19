import BasePage from './BasePage';

class SecureAreaPage extends BasePage {
  get flashMessage() {
    return cy.get('#flash');
  }

  get logoutButton() {
    return cy.contains('a.button', 'Logout');
  }

  assertSuccessfulLogin() {
    this.assertUrlContains('/secure');
    this.flashMessage.should('be.visible').and('contain.text', 'You logged into a secure area!');
  }

  logout() {
    this.logoutButton.click();
  }
}

export default new SecureAreaPage();
