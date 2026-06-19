import BasePage from './BasePage';

class JavaScriptAlertsPage extends BasePage {
  visit() {
    super.visit('/javascript_alerts');
  }

  clickAlertButton() {
    cy.contains('button', 'Click for JS Alert').click();
  }

  clickConfirmButton() {
    cy.contains('button', 'Click for JS Confirm').click();
  }

  clickPromptButton() {
    cy.contains('button', 'Click for JS Prompt').click();
  }

  get resultMessage() {
    return cy.get('#result');
  }
}

export default new JavaScriptAlertsPage();
