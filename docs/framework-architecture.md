# Framework Architecture

## Overview

This framework uses a Cypress JavaScript structure designed for readability, maintainability and CI/CD execution.

## Main Layers

### Test Specs

Located under:

```text
cypress/e2e/
```

Smoke tests and regression tests are separated by folder:

```text
cypress/e2e/smoke/
cypress/e2e/regression/
```

### Page Objects

Located under:

```text
cypress/pages/
```

Page objects contain selectors and reusable page actions.

Benefits:

- Reduces duplicated selectors
- Keeps tests readable
- Makes UI changes easier to maintain
- Separates test intent from UI implementation details

### Fixtures

Located under:

```text
cypress/fixtures/
```

Fixtures store reusable test data.

### Support Layer

Located under:

```text
cypress/support/
```

This area contains reusable custom commands and global Cypress support configuration.

## Design Principles

- Keep tests independent.
- Avoid hardcoded waits.
- Use Cypress retry-ability through assertions.
- Keep selectors centralized when possible.
- Keep test data separate from test logic.
- Make tests easy to run locally and in CI.
