import BasePage from './BasePage';

class DynamicLoadingPage extends BasePage {
  visitExampleOne() {
    super.visit('/dynamic_loading/1');
  }

  visitExampleTwo() {
    super.visit('/dynamic_loading/2');
  }

  get startButton() {
    return cy.get('#start button');
  }

  get finishMessage() {
    return cy.get('#finish h4');
  }

  startLoading() {
    this.startButton.click();
  }

  assertLoadedMessage(expectedMessage) {
    this.finishMessage.should('be.visible').and('have.text', expectedMessage);
  }
}

export default new DynamicLoadingPage();
