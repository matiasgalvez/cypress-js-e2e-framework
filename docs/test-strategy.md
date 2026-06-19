# Cypress E2E Test Strategy

## Objective

The goal of this framework is to demonstrate how Cypress can be used to validate common Web UI behaviors through a clean smoke and regression strategy.

## Application Under Test

Public demo site:

```text
https://the-internet.herokuapp.com
```

This application is commonly used for automation practice because it exposes different UI patterns such as login, checkboxes, dropdowns, dynamic loading and JavaScript dialogs.

## Smoke Suite

Smoke tests validate the minimum set of behaviors needed to confirm that the application is reachable and critical paths are functional.

Current smoke coverage:

- Homepage loads
- Key example links are displayed
- Valid login works
- Invalid login shows an error

## Regression Suite

Regression tests validate broader behavior that could break after code changes.

Current regression coverage:

- Checkbox interactions
- Dropdown selections
- Dynamic loading behavior
- JavaScript alert handling
- JavaScript confirmation handling
- JavaScript prompt handling

## Prioritization Criteria

Scenarios are prioritized based on:

- Business or user impact
- Frequency of execution
- Regression risk
- Stability of the UI behavior
- Value in CI/CD quality gates

## Automation Guidelines

- Use page objects for reusable page actions.
- Use assertions instead of static waits.
- Keep tests independent.
- Use fixture data for reusable inputs.
- Use environment variables for configuration.
- Generate reports and artifacts for debugging.
