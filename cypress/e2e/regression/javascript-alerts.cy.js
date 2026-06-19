import JavaScriptAlertsPage from '../../pages/JavaScriptAlertsPage';

import testData from '../../fixtures/testData.json';

describe('Regression | JavaScript alerts', () => {
  beforeEach(() => {
    JavaScriptAlertsPage.visit();
  });

  it('REG-ALERT-001 - handles JavaScript alert', () => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('I am a JS Alert');
    });

    JavaScriptAlertsPage.clickAlertButton();
    JavaScriptAlertsPage.resultMessage.should('have.text', 'You successfully clicked an alert');
  });

  it('REG-ALERT-002 - accepts JavaScript confirm dialog', () => {
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('I am a JS Confirm');
      return true;
    });

    JavaScriptAlertsPage.clickConfirmButton();
    JavaScriptAlertsPage.resultMessage.should('have.text', 'You clicked: Ok');
  });

  it('REG-ALERT-003 - handles JavaScript prompt dialog', () => {
    cy.window().then((window) => {
      cy.stub(window, 'prompt').returns(testData.javascriptAlerts.promptText);
    });

    JavaScriptAlertsPage.clickPromptButton();
    JavaScriptAlertsPage.resultMessage.should('have.text', `You entered: ${testData.javascriptAlerts.promptText}`);
  });
});
