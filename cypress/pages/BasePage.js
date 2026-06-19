class BasePage {
  visit(path = '/') {
    cy.visit(path);
  }

  getPageHeading() {
    return cy.get('h1, h2, h3').first();
  }

  assertUrlContains(path) {
    cy.url().should('include', path);
  }

  assertTextVisible(text) {
    cy.contains(text).should('be.visible');
  }
}

export default BasePage;
