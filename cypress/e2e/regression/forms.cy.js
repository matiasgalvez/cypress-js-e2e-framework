import CheckboxesPage from '../../pages/CheckboxesPage';
import DropdownPage from '../../pages/DropdownPage';

import testData from '../../fixtures/testData.json';

describe('Regression | Form controls', () => {
  it('REG-FORM-001 - toggles checkbox states', () => {
    CheckboxesPage.visit();

    CheckboxesPage.checkboxes.should('have.length', 2);
    CheckboxesPage.toggleFirstCheckbox();
    CheckboxesPage.untoggleSecondCheckbox();
  });

  it('REG-FORM-002 - selects option 1 from dropdown', () => {
    DropdownPage.visit();

    DropdownPage.selectOption(testData.dropdown.optionOne);
    DropdownPage.assertSelectedOption(testData.dropdown.optionOne);
  });

  it('REG-FORM-003 - selects option 2 from dropdown', () => {
    DropdownPage.visit();

    DropdownPage.selectOption(testData.dropdown.optionTwo);
    DropdownPage.assertSelectedOption(testData.dropdown.optionTwo);
  });
});
