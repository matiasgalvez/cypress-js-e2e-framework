import HomePage from '../../pages/HomePage';

const expectedExamples = ['Form Authentication', 'Checkboxes', 'Dropdown', 'JavaScript Alerts'];

describe('Smoke | Application navigation', () => {
  it('SMOKE-NAV-001 - loads the demo application homepage', () => {
    HomePage.visit();

    HomePage.heading.should('be.visible').and('contain.text', 'Welcome to the-internet');
    HomePage.availableExamples.should('have.length.greaterThan', 10);
  });

  expectedExamples.forEach((exampleName) => {
    it(`SMOKE-NAV-002 - displays ${exampleName} example link`, () => {
      HomePage.visit();

      cy.contains('#content ul li a', exampleName).should('be.visible');
    });
  });
});
