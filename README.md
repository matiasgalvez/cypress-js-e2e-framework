# Cypress JavaScript E2E Framework

A professional Cypress E2E automation framework built with JavaScript for QA portfolio purposes.

This project demonstrates Web UI automation best practices using a different public demo application from the Playwright portfolio repo.

**Application under test:** https://the-internet.herokuapp.com

## Purpose

This framework showcases my ability to design, organize and maintain a Cypress-based Web UI automation project with:

- Page Object Model architecture
- Smoke and regression test separation
- Environment-based configuration
- Custom commands
- Test data separation
- HTML and JUnit-style reporting
- Screenshots and videos on failure
- CircleCI pipeline configuration
- Optional Jenkins pipeline example
- CI-ready execution scripts

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model
- Mochawesome reporting
- JUnit XML reporting
- CircleCI
- Jenkins
- dotenv

## Covered Areas

### Smoke Tests

- Valid login
- Invalid login
- Homepage availability
- Key navigation links

### Regression Tests

- Checkbox behavior
- Dropdown selection
- Dynamic loading behavior
- JavaScript alert handling
- JavaScript confirm handling
- JavaScript prompt handling

## Project Structure

```text
cypress-js-e2e-framework/
├── .circleci/
│   └── config.yml
├── cypress/
│   ├── e2e/
│   │   ├── smoke/
│   │   └── regression/
│   ├── fixtures/
│   ├── pages/
│   └── support/
├── docs/
├── .env.example
├── .gitignore
├── Jenkinsfile
├── cypress.config.js
├── package.json
├── reporter-config.json
└── README.md
```

## Setup

Clone the repository and install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

## Run Tests

Open Cypress locally:

```bash
npm run cy:open
```

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Run tests in Chrome:

```bash
npm run test:chrome
```

Run headed mode:

```bash
npm run test:headed
```

## Environment Configuration

Default configuration is loaded from `.env`.

Example:

```text
BASE_URL=https://the-internet.herokuapp.com
TEST_ENV=qa
TEST_USERNAME=tomsmith
TEST_PASSWORD=SuperSecretPassword!
INVALID_USERNAME=invalid_user
INVALID_PASSWORD=invalid_password
```

Sensitive or environment-specific values should not be committed.

## Reporting

The framework uses multiple reporters:

- Cypress default/spec output
- Mochawesome HTML/JSON reports
- JUnit XML reports for CI tools

Reports are generated under:

```text
reports/
```

Screenshots and videos are generated under:

```text
cypress/screenshots/
cypress/videos/
```

## CI/CD

### CircleCI

The main CI/CD example is located at:

```text
.circleci/config.yml
```

Pipeline strategy:

- Install dependencies with `npm ci`
- Verify Cypress binary
- Run smoke tests first
- Run regression tests after smoke tests on `main`
- Store JUnit test results
- Store reports, screenshots and videos as artifacts

### Jenkins

An optional Jenkins pipeline is included at:

```text
Jenkinsfile
```

This is useful for enterprise environments where Jenkins is still the main CI/CD tool.

## QA Best Practices Demonstrated

- Separate smoke and regression suites
- Keep selectors and page actions inside page objects
- Avoid hardcoded waits
- Use stable assertions
- Keep test data outside test logic
- Capture screenshots and videos for debugging
- Generate CI-readable test results
- Keep environment configuration outside test files
- Make tests runnable locally and in CI/CD

## Portfolio Value

This repo demonstrates a Cypress framework that can be presented in a Senior QA Automation / SDET portfolio as proof of:

- Framework design
- JavaScript automation experience
- Cypress automation experience
- CI/CD quality gate implementation
- Test reporting strategy
- Maintainable UI test architecture
