import BasePage from './BasePage';

class HomePage extends BasePage {
  visit() {
    super.visit('/');
  }

  get heading() {
    return cy.get('h1.heading');
  }

  get availableExamples() {
    return cy.get('#content ul li a');
  }

  openExample(exampleName) {
    cy.contains('#content ul li a', exampleName).click();
  }
}

export default new HomePage();
