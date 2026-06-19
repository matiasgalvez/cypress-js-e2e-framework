import BasePage from './BasePage';

class CheckboxesPage extends BasePage {
  visit() {
    super.visit('/checkboxes');
  }

  get checkboxes() {
    return cy.get('#checkboxes input[type="checkbox"]');
  }

  toggleFirstCheckbox() {
    this.checkboxes.eq(0).check().should('be.checked');
  }

  untoggleSecondCheckbox() {
    this.checkboxes.eq(1).uncheck().should('not.be.checked');
  }
}

export default new CheckboxesPage();
