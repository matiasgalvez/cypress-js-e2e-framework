import './commands';

Cypress.on('uncaught:exception', () => {
  // This prevents third-party demo-site JavaScript errors from failing framework examples.
  // Product defects should still be validated through explicit assertions in real projects.
  return false;
});
