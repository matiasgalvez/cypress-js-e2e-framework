import BasePage from './BasePage';

class DropdownPage extends BasePage {
  visit() {
    super.visit('/dropdown');
  }

  get dropdown() {
    return cy.get('#dropdown');
  }

  selectOption(optionText) {
    this.dropdown.select(optionText);
  }

  assertSelectedOption(optionText) {
    this.dropdown.find('option:selected').should('have.text', optionText);
  }
}

export default new DropdownPage();
